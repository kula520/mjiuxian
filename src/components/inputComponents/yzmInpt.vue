<template>
    <div class="numYzmbd">
        <div class="numYzm">
            <input type="text" v-model="$store.state.home.yzmVal" @blur="yzmFunction">
            <div class="tipTrue" v-show="$store.state.home.isYzmTrue">验证通过</div>
        </div>        
        <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
            <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
        </div>
        <div v-show="$store.state.home.isYzmFalse" class="tipError"><em class="icon"></em>{{$store.state.home.error}}</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'yzmIpt',
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
        codeList: []
        }
    },
  mounted () {
    this.createdCode()
  },
  methods: {
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
            this.$store.state.home.validCode = codeArray.join("")
            // 将当前数据派发出去
            this.$emit('update:value', codeList.map(item => item.code).join(''))
        },
        getStyle (data) {
            return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
        },
        yzmFunction(){
            let iptVal = this.$store.state.home.inputValChild
            if(iptVal == '' || iptVal.length == 0){
                this.$store.state.home.inputData.isActive = true;
                this.$store.state.home.inputData.error = '手机号不能为空！'
                return false;
            } else {                
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    if(this.$store.state.home.yzmVal === this.$store.state.home.validCode){
                        this.$store.state.home.isYzmTrue = true
                        this.$store.state.home.isYzmFalse = false
                    }else{
                        this.$store.state.home.isYzmTrue = false
                        this.$store.state.home.isYzmFalse = true
                    }
                }, 300);
            }
        }
    }
}
</script>
<style scoped>
/* 验证 */
.ValidCode{display:block;justify-content: center;align-items: center;cursor: pointer;position: absolute;right:0;top:0;background-color:#f2f2f2;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.ValidCode span{display: inline-block;}
.numYzmbd{position:relative;margin-top:40px;}
.numYzm{position:relative;border:1px solid #ccc;height:28px;line-height:28px;padding:4px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;position:relative;margin:0 105px 0 0;}
.numYzmbd .tipTrue{position: absolute;right:10px;top:4px;font-size:14px;color:#999;}
</style>