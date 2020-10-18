<template>
    <div class="iptSig">
        <div class="phoneIput">
            <span class="emIcon icon phoneIcon"></span>
            <input type="text" v-model="$store.state.home.inputValChild" @blur="handleBlur" :placeholder="$store.state.home.inputData.title" maxlength="11">
        </div>
        <div v-show="$store.state.home.inputData.isActive" class="tipError"><em class="icon"></em>{{$store.state.home.inputData.error}}</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'phoneIpt',
    data(){
        return {
              
        }
    },
    methods:{
      handleBlur(){
        let mobile_mode = /^1[34578]\d{9}$/;
        let iptVal = this.$store.state.home.inputValChild
        if(iptVal == '' || iptVal.length == 0){
            this.$store.state.home.inputData.isActive = true;
            this.$store.state.home.inputData.error = '手机号不能为空！'
            return false;
        } else if(!mobile_mode.test(iptVal)){
            this.$store.state.home.inputData.isActive = true;
            this.$store.state.home.inputData.error = '请输入正确手机号！'
            return false;
        } else {
            this.$store.state.home.inputData.isActive = false;
        }
      }
    }
}
</script>
<style scoped>
.iptSig{position:relative;}
.phoneIcon{background-position:-134px -25px;}
.phoneIput{border:1px solid #ccc;height:28px;line-height:28px;padding:4px 4px 4px 30px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;position:relative;}
.phoneIput .emIcon{display:block;width:30px;height:30px;position:absolute;top:0;left:0;z-index:99;}
.tipError{line-height:30px;position: absolute;right:0;top:40px;}
.tipError em{display:block;width:15px;height:15px;background-position:-202px -34px;float:left;position: relative;top:7px;margin-right:5px;}
</style>