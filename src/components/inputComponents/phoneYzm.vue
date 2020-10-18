<template>
    <div>
        <div class="numYzmbd">
            <div class="numYzm">
                <input type="text">
            </div>            
            <mt-button class="yzmbtn" type="danger" @click="yzmClick" v-show="show">获取验证码</mt-button>
            <mt-button class="yzmbtn" v-show="!show">{{count}}秒</mt-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'phoneYzm',
    data(){
        return {            
            show: true,
            count: '',
            timer: null
        }
    },
    methods:{
        yzmClick(){
            let iptVal = this.$store.state.home.inputValChild
            if(iptVal == '' || iptVal.length == 0){
                this.$store.state.home.inputData.isActive = true;
                this.$store.state.home.inputData.error = '手机号不能为空！'
                return false;
            } else if(this.$store.state.home.yzmVal.length  == 0){                
                this.$store.state.home.isYzmTrue = false
                this.$store.state.home.isYzmFalse = true
                return false;
            } else if(this.$store.state.home.yzmVal === this.$store.state.home.validCode){        
                let data = this.$store.state.home.inputValChild
                axios.post('newjiuxian/phoneYzm',data)
                .then(res => {
                    let iTrue = res.data.data.boolean
                    if(iTrue == 'true'){
                        alert('434223')
                        const TIME_COUNT = 60;
                        if (!this.timer) {
                            this.count = TIME_COUNT;
                            this.show = false;
                            this.timer = setInterval(() => {
                                if (this.count > 0 && this.count <= TIME_COUNT) {
                                    this.count--;
                                } else {
                                    this.show = true;
                                    clearInterval(this.timer);
                                    this.timer = null;
                                }
                            }, 1000)
                        }
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.yzmbtn{width:100px;height:38px;font-size:12px;position:absolute;top:0;right:0;}
.numYzmbd{position:relative;margin-top:40px;}
.numYzm{position:relative;border:1px solid #ccc;height:28px;line-height:28px;padding:4px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;position:relative;margin:0 105px 0 0;}
.numYzmbd .tipTrue{position: absolute;right:10px;top:4px;font-size:14px;color:#999;}
</style>