<template>
    <div>
        <iptPhone></iptPhone>
        <iptYzm></iptYzm>
        <phoneYzm></phoneYzm>
        <loginInfo></loginInfo>
    </div>
</template>
<script>
import axios from 'axios'
import '../../../mockjs/home'
import iptPhone from '../../inputComponents/phoneIpt'
import iptYzm from '../../inputComponents/yzmInpt'
import phoneYzm from '../../inputComponents/phoneYzm'
import loginInfo from '../../inputComponents/loginInfo'
export default {
    name:'loginPhone',
    data(){
        return {
        }
    },
    components:{
        iptPhone,
        iptYzm,
        phoneYzm,
        loginInfo
    }
}
</script>
<style>
.icon{background:url('../../../assets/login.png') no-repeat;background-size:320px 250px;}
.tipError{line-height:30px;position: absolute;right:0;top:40px;}
.tipError em{display:block;width:15px;height:15px;background-position:-202px -34px;float:left;position: relative;top:7px;margin-right:5px;}

</style>
