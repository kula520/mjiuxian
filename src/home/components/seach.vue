<template>
    <div class="seachBd">
        <div class="seach">
            <span class="jxLogo"><img src="../../assets/logo.png"></span>
            <div class="sechipt">
                <mt-button type="default" class="popBtn" @click.native="handleClick"></mt-button>
                <input class="inputTxt" type="text" placeholder='国窖茅台' disabled>
            </div>
            
        </div>
        <mt-popup v-model="popupVisible" :modal='true' position="right" closeOnClickModal='true'>
            <div class="popUpTop">
                <mt-button @click.native="closeBtn" class="popCloseBtn">按钮</mt-button>
                <seachList></seachList>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui'
import $ from 'jquery'
import seachList from './seachList'
Vue.use(Popup.name, Popup);
export default {
    name:'seach',
    data(){
        return {
            popupVisible:false
        }
    },
    methods: {
      handleClick: function () {
        this.popupVisible = true
        let w = document.body.clientWidth
        let h = document.body.clientHeight
        $('.popUpTop').css({"width":w+"px","height":h+"px"})        
      },
      closeBtn: function () {
        this.popupVisible = false
      }
    },
    components:{
        seachList
    }
}
</script>
<style scoped>
.seachBd{margin:5px;height:24px;position:absolute;top:40px;left:0;z-index:999;width:97%;}
.seachBd.active{top:0;}
.seach{position:relative;}
.seachBd .jxLogo{display:block;width:60px;height:24px;position:absolute;top:0;left:0;}
.seachBd .jxLogo img{width:100%;height:100%;}
.seachBd .sechipt{background-color:#fff;margin-left:65px;position:relative;}
.seachBd .popBtn,.seachBd .inputTxt{height:24px;width:100%;position:absolute;top:0px;left:0;}
.seachBd .popBtn{background:#000;z-index:999;opacity:0;}
.seachBd .inputTxt{background-color:#fff;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;}
.seachBd .popCloseBtn{width:40px;height:40px;position:absolute;top:0;left:0;z-index:9999;opacity:0;}
</style>