<template>
    <div class="mb40">
        <topApp v-on:classStyle="childValue"></topApp>    
        <seach :class="{'active':isActive}">></seach>
        <swipeImg></swipeImg>   
        <div class="navListsbd">
            <ul>
                <li v-for="(navs,index) in this.$store.state.home.navLists" :key='index' @click="navClickHandle(navs.id,navs.name)"><router-link tag="a" :to='{name:navs.url}' :title='navs.name'><img :src='navs.newsImage'></router-link></li>
            </ul>
        </div>
        <div class="hLines"><strong>酒仙头条</strong>
            <div class="linesNew">
                <div id="hLinesBox">
                    <ul id="linesList" ref="con1" :class="{anim:animate==true}">
                        <li v-for='item in items'><a href="https://m.jiuxian.com/mobile/2020/MTGG/index.html">{{item.newList}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <seckillList></seckillList>
        <bannerLists></bannerLists>
        <specialPage :specialObj='specialObjData'></specialPage>
        <specialPage :specialObj='specialObjData1'></specialPage>
        <specialPage :specialObj='specialObjData2'></specialPage>
        <specialPage :specialObj='specialObjData3'></specialPage>
        <div class="hotShopTil">爆款推荐</div>
        <fixdScoll></fixdScoll>
    </div>
</template>
<script>
import axios from "axios"
import '../mockjs/global'
import '../mockjs/home'
import swipeImg from '../components/swipe/swipe'
import topApp from '../components/topApp/topApp'
import seach from '../home/components/seach'
import seckillList from './components/seckill'
import fixdScoll from './components/fixdScoll'
import bannerLists from './components/bannerList'
import specialPage from './components/specialPage'

export default {
    name:'home',
    data(){
        return {
            isActive:false,
            animate:false,
            items:[],
            specialObjData:{
                spTitle:'中国白酒馆',                
                imgL:require('../assets/spBanner/1.jpg'),
                imgLurl:'https://m.jiuxian.com/mobile/2020/MT/index.html',
                imgRT:require('../assets/spBanner/2.jpg'),
                imgRTurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151784',
                imgBList:[
                    {
                        imgB:require('../assets/spBanner/3.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151820'
                    },
                    {
                        imgB:require('../assets/spBanner/4.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151802'
                    }
                ]
            },
            specialObjData1:{
                spTitle:'世界洋酒馆',                
                imgL:require('../assets/spBanner/1.jpg'),
                imgLurl:'https://m.jiuxian.com/mobile/2020/MT/index.html',
                imgRT:require('../assets/spBanner/2.jpg'),
                imgRTurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151784',
                imgBList:[
                    {
                        imgB:require('../assets/spBanner/3.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151820'
                    },
                    {
                        imgB:require('../assets/spBanner/4.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151802'
                    }
                ]
            },
            specialObjData2:{
                spTitle:'小资葡萄酒馆',                
                imgL:require('../assets/spBanner/1.jpg'),
                imgLurl:'https://m.jiuxian.com/mobile/2020/MT/index.html',
                imgRT:require('../assets/spBanner/2.jpg'),
                imgRTurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151784',
                imgBList:[
                    {
                        imgB:require('../assets/spBanner/3.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151820'
                    },
                    {
                        imgB:require('../assets/spBanner/4.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151802'
                    }
                ]
            },
            specialObjData3:{
                spTitle:'啤酒综合馆',                
                imgL:require('../assets/spBanner/1.jpg'),
                imgLurl:'https://m.jiuxian.com/mobile/2020/MT/index.html',
                imgRT:require('../assets/spBanner/2.jpg'),
                imgRTurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151784',
                imgBList:[
                    {
                        imgB:require('../assets/spBanner/3.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151820'
                    },
                    {
                        imgB:require('../assets/spBanner/4.jpg'),
                        imgBurl:'https://m.jiuxian.com/m_v1/dynamic/mob01/151802'
                    }
                ]
            }
        }
    },
    created(){  
        setInterval(this.scroll,3000)
    },
    methods:{
        childValue: function (classStyle) {
            this.isActive = classStyle
        },
        scroll(){
            this.animate = true;    
            setTimeout(() => {      
                this.items.push(this.items[0]);  
                this.items.shift();               
                this.animate = false;  
            },500)
        },
        navClickHandle(key,val) {
            //获取本地缓存数据---sessionStorage 关闭窗口删除数据 localStorage 永久保存清除缓存才会清除数据
            this.$store.state.sort.topTitle = val
            var storage = window.sessionStorage;  
                storage.setItem('title', val); 
        }
    },
    mounted () {
        axios.get("newjiuxian/navList").then((res)=>{
            this.$store.state.home.navLists = res.data.data
        })              
        axios.get("newjiuxian/newLists").then((res)=>{
            this.items = res.data.data
        })
    },
    components:{
        swipeImg,
        topApp,
        seach,
        seckillList,
        fixdScoll,
        bannerLists,
        specialPage
    }
}
</script>
<style scoped>
.mb40{margin-bottom:40px;}
.navListsbd{position:fixed;bottom:0;left:0;height:40px;background:#f1f1f1;width:100%;border-top:1px solid #ccc;}
.navListsbd li{width:20%;display:inline-block;height:40px;line-height:40px;text-align:center;}
.navListsbd li img{width:50%;height:auto;vertical-align: middle;}
.hLines{height:24px;overflow:hidden;margin:5px 10px;position:relative;}
.hLines strong{background:url('../assets/tt.jpg') no-repeat 0 0/109px 20px;width:109px;height:20px;text-indent:-9999px;display:block;position:absolute;top:0;left:0;}
.hLines .linesNew{border-left:1px solid #ccc;height:18px;line-height:18px;margin:3px 0 3px 116px;padding-left:4px;}
#hLinesBox{overflow: hidden;}
#hLinesBox .anim{transition: all 0.5s;margin-top: -18px;}
#hLinesBox  #linesList li{list-style: none;line-height: 18px;height: 18px;}
.hotShopTil{text-align:center;font-size:14px;padding:10px;border-bottom:1px solid #ccc;background:#f1f1f1;font-weight:bold;}
</style>