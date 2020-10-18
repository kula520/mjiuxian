<template>
    <div>
        <iptPhone></iptPhone>
        <iptYzm></iptYzm>
        <phoneYzm></phoneYzm>    
        <div class="loginBtn"> 
            <mt-button type="danger">立即登录</mt-button>
        </div>  
        <div class="registerBD"><a href="#" class="rf">找回密码</a><a href="#">免费注册</a></div> 
        <div class="coop"><strong>合作伙伴登录</strong><em class="line"></em></div>
        <div class="loginbd"><a class="icon qqLogin" href="#">QQ登录</a><a class="icon wxLogin" href="#">微信登录</a></div>
    </div>
</template>
<script>
import axios from 'axios'
import '../../../mockjs/home'
import iptPhone from '../../inputComponents/phoneIpt'
import iptYzm from '../../inputComponents/yzmInpt'
import phoneYzm from '../../inputComponents/phoneYzm'
export default {
    name:'loginPhone',
    data(){
        return {
        }
    },
    components:{
        iptPhone,
        iptYzm,
        phoneYzm
    }
}
</script>
<style>
.icon{background:url('../../../assets/login.png') no-repeat;background-size:320px 250px;}
.tipError{line-height:30px;position: absolute;right:0;top:40px;}
.tipError em{display:block;width:15px;height:15px;background-position:-202px -34px;float:left;position: relative;top:7px;margin-right:5px;}
.loginBtn{margin:40px 0;}
.registerBD{line-height:20px;}
.coop{position:relative;margin:30px 10px;font-size:14px;line-height:24px;text-align:center;color:#999}
.coop .line{content: "";position: absolute;top:-50%;bottom:-50%;left:-50%;right:-50%;width:200%;height:138%;-webkit-transform: scale(0.5);transform: scale(0.5);border-bottom: solid 1px #999;box-sizing:border-box;}
.coop strong{padding:5px 20px;background:#fff;z-index:9;position:relative;}
.loginbd{text-align:center;}
.loginbd a{display:inline-block;width:45px;height:45px;margin:0 20px;text-indent:-9999px;}
.loginbd .qqLogin{background-position:-78px -99px;}
.loginbd .wxLogin{background-position:-234px -99px;}
</style>
