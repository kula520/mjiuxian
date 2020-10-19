<template>
    <div>        
        <div class="iptSig">
            <div class="phoneIput">
                <span class="emIcon icon phoneIcon"></span>
                <input type="text" v-model="$store.state.home.userData.userName" @blur="handleBlur" :placeholder="$store.state.home.userData.userTitle">
            </div>
            <div v-show="$store.state.home.userData.isUserName" class="tipError"><em class="icon"></em>{{$store.state.home.userData.userNameerror}}</div>
        </div>
        <div class="iptSig m40">
            <div class="phoneIput">
                <span class="emIcon icon passIcon"></span>
                <input type="password" v-model="$store.state.home.userData.userPass" placeholder="密码" maxlength="16">
            </div>
            <div v-show="$store.state.home.userData.isUserPass" class="tipError"><em class="icon"></em>{{$store.state.home.userData.userPasserror}}</div>
        </div>
        <div class="iptSig numYzmbd m40">
            <div class="numYzm">
                <input type="text" v-model="$store.state.home.userData.userYzm" @blur="yzmFunction">
                <div class="tipTrue" v-show="$store.state.home.userData.userYzmT">验证通过</div>
            </div>    
            <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
                <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
            </div>
            <div  class="tipError" v-show="$store.state.home.userData.userYzmF"><em class="icon"></em>验证码错误！</div>
        </div>
        <userLogin></userLogin>
    </div>
</template>
<script>
import axios from 'axios'
import '../../../mockjs/home'
import userLogin from '../../inputComponents/userLogin'
export default {
    name:'userlogin',
    components:{
        userLogin
    },
    props: {
        width: {
        type: String,
        default: '100px'
        },
        height: {
        type: String,
        default: '40px'
        },
        length: {
        type: Number,
        default: 4
        },
        codeListArray:{
        type:Array,
        data:[]
        }
    },
    data () {
        return {
            codeList: [],
            codelistAry:[]
        }
    },
    mounted () {
        this.createdCode()
    },
    methods:{
        handleBlur(){
            let data = this.$store.state.home.userData.userName
            axios.post('newjiuxian/userNameID',data)
            .then(res => {
                let iTrue = res.data.data.userName
                if(data == '' || data.length == 0){
                    this.$store.state.home.userData.isUserName = true;
                    this.$store.state.home.userData.userNameerror = '用户名不能为空！'
                    return false
                } else if(iTrue != '0'){               
                    this.$store.state.home.userData.isUserName = true;
                    this.$store.state.home.userData.userNameerror = '用户名不存在'
                    return false
                }
                if(iTrue == '0'){                    
                    this.$store.state.home.userData.isUserName = false;
                }
            })
        },        
        refreshCode () {
            this.createdCode()
        },
        createdCode () {
            let len = this.length,
            codeList = [],
            chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789',
            charsLen = chars.length
            // 生成
            for (let i = 0; i < len; i++) {
                let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
                codeList.push({
                    code: chars.charAt(Math.floor(Math.random() * charsLen)),
                    color: `rgb(${rgb})`,
                    fontSize: `18px`,
                    padding: `10px 5px`,
                    transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
                })
            }
            // 指向
            this.codeList = codeList
            let codeArray = []
            for(let i=0;i<codeList.length;i++){
                let val = codeList[i].code
                codeArray.push(val)
            }
            this.codelistAry = codeArray.join("")
            // 将当前数据派发出去
        },
        getStyle (data) {
            return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
        },
        yzmFunction(){
            let iptVal = this.$store.state.home.userData.userName
            if(iptVal == '' || iptVal.length == 0){
                this.$store.state.home.userData.isUserName = true;
                this.$store.state.home.userData.userNameerror = '用户名不能为空！'
                return false;
            } else {                
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    if(this.$store.state.home.userData.userYzm === this.codelistAry){
                        this.$store.state.home.userData.userYzmT = true
                        this.$store.state.home.userData.userYzmF = false
                        this.$store.state.home.userData.yzmTrue = true;
                    }else{
                        this.$store.state.home.userData.userYzmT = false
                        this.$store.state.home.userData.userYzmF = true
                        this.$store.state.home.userData.yzmTrue = false;
                    }
                }, 300);
            }
        },
        loginClick(){
            let data = {
                userN: this.$store.state.home.userData.userName,
                userP: this.$store.state.home.userData.userPass 
            }
            if(this.$store.state.home.userData.userYzm === this.codelistAry){
                this.$store.state.home.userData.userYzmT = true
                this.$store.state.home.userData.userYzmF = false
                this.$store.state.home.userData.yzmTrue = true;
            }else{
                this.$store.state.home.userData.userYzmT = false
                this.$store.state.home.userData.userYzmF = true
                this.$store.state.home.userData.yzmTrue = false;
            }
            axios.post('newjiuxian/userLogin',data)
            .then(res => {
                let userNewN = res.data.data.userName
                let userNewP = res.data.data.userPass
                if(data.userN == userNewN && data.userP == userNewP && this.$store.state.home.userData.yzmTrue == true){
                    console.log('登录成功')       
                } else {
                    console.log('用户名密码不匹配')     
                }
            })
        }
    }
}
</script>
<style scoped>
.icon{background:url('../../../assets/login.png') no-repeat;background-size:320px 250px;}
.iptSig{position:relative;}
.iptSig.m40{margin:40px 0;}
.phoneIcon{background-position:5px -25px;}
.passIcon{background-position:-65px -25px;}
.phoneIput{border:1px solid #ccc;height:28px;line-height:28px;padding:4px 4px 4px 30px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;position:relative;}
.phoneIput .emIcon{display:block;width:30px;height:30px;position:absolute;top:0;left:0;z-index:99;}
.tipError{line-height:30px;position: absolute;right:0;top:40px;}
.tipError em{display:block;width:15px;height:15px;background-position:-65px -34px;float:left;position: relative;top:7px;margin-right:5px;}
.ValidCode{display:block;justify-content: center;align-items: center;cursor: pointer;position: absolute;right:0;top:0;background-color:#f2f2f2;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.ValidCode span{display: inline-block;}
.numYzmbd{position:relative;}
.numYzm{position:relative;border:1px solid #ccc;height:28px;line-height:28px;padding:4px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;position:relative;margin:0 105px 0 0;}
.numYzmbd .tipTrue{position: absolute;right:10px;top:4px;font-size:14px;color:#999;}
.tipError{line-height:30px;position: absolute;right:0;top:40px;}
.tipError em{display:block;width:15px;height:15px;background-position:-202px -34px;float:left;position: relative;top:7px;margin-right:5px;}
</style>