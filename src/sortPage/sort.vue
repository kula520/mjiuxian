<template>
    <div>
        <topNav></topNav>
        <div class="seachBd">
            <div class="seach">
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
        <div class="navListbd">
            <ul>
                <li v-for="(sort,i) in sortList" :key='sort.id'>
                    <a :href="sort.url">
                        <span :class="sort.claSty +i"></span>
                        <p>{{sort.name}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from "axios"
import '../mockjs/global'
import topNav from '../navGlobal/topNav'
import { Popup } from 'mint-ui'
import $ from 'jquery'
import seachList from '../home/components/seachList'
Vue.use(Popup.name, Popup);
export default {
    name:'sortPage',
    data(){
        return {            
            isActive:false,
            popupVisible:false,
            sortList:[]
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
    mounted(){
        axios.get('mjiuxian/sortLists')
        .then((res) => {
            this.sortList = res.data.data
        })
    },
    components:{
        topNav,
        seachList
    }
}
</script>
<style scoped>
.seachBd{margin:5px;height:24px;position:absolute;left:0;z-index:999;width:97%;}
.seach{position:relative;width:100%;overflow:hidden;}
.seachBd .sechipt{background-color:#ececec;position:relative;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;height:30px;line-height:30px;}
.seachBd .popBtn,.seachBd .inputTxt{height:24px;width:100%;position:absolute;top:0px;left:0;background:transparent;}
.seachBd .popBtn{background:#000;z-index:999;opacity:0;}
.seachBd .inputTxt{padding:4px 5px;}
.seachBd .popCloseBtn{width:40px;height:40px;position:absolute;top:0;left:0;z-index:9999;opacity:0;}
.navListbd{border-top:1px solid #e4e4e4;margin-top:40px;width:100%;overflow:hidden;}
.navListbd ul{width:102%;}
.navListbd ul li{width:33%;display:inline-block;border-bottom:1px solid #e4e4e4;border-right:1px solid #e4e4e4;text-align:center}
.navListbd ul li span{background:url('../assets/sortIcon.png') no-repeat 0 0;width:50px;height:50px;display:inline-block;}
.navListbd ul li span.claSty0{background-position:0 -2px;}
.navListbd ul li span.claSty1{background-position:-82px -2px;}
.navListbd ul li span.claSty2{background-position:-164px -2px;}
.navListbd ul li span.claSty3{background-position:0 -75px;}
.navListbd ul li span.claSty4{background-position:-82px -72px;}
.navListbd ul li span.claSty5{background-position:-164px -75px;}
.navListbd ul li span.claSty6{background-position:0 -146px;}
.navListbd ul li span.claSty7{background-position:-82px -146px;}
.navListbd ul li span.claSty8{background-position:-164px -146px;}
.navListbd ul li span.claSty9{background-position:0 -225px;}
.navListbd ul li span.claSty10{background-position:-82px -225px;}
.navListbd ul li span.claSty11{background-position:-164px -225px;}
.navListbd ul li p{display:block;line-height:14px;margin-bottom:10px;}
</style>