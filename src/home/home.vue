<template>
    <div>
        <topApp v-on:classStyle="childValue"></topApp>    
        <seach :class="{'active':isActive}">></seach>
        <swipeImg></swipeImg>   
        <div class="navListsbd">
            <ul>
                <li v-for="(navs,index) in this.$store.state.home.navLists" :key='index'><router-link tag="a" :to='{name:navs.url}' :title='navs.name'><img :src='navs.newsImage'></router-link></li>
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
    </div>
</template>
<script>
import axios from "axios"
import '../mockjs/global'
import '../mockjs/home'
import swipeImg from '../components/swipe/swipe'
import topApp from '../components/topApp/topApp'
import seach from '../home/components/seach'
export default {
    name:'home',
    data(){
        return {
            isActive:false,
            animate:false,
            items:[]
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
        seach
    }
}
</script>
<style scoped>
.navListsbd{position:fixed;bottom:0;left:0;height:40px;background:#f1f1f1;width:100%;border-top:1px solid #ccc;}
.navListsbd li{width:20%;display:inline-block;height:40px;line-height:40px;text-align:center;}
.navListsbd li img{width:50%;height:auto;vertical-align: middle;}
.hLines{height:24px;overflow:hidden;margin:5px 10px;position:relative;}
.hLines strong{background:url('../assets/tt.jpg') no-repeat 0 0/109px 20px;width:109px;height:20px;text-indent:-9999px;display:block;position:absolute;top:0;left:0;}
.hLines .linesNew{border-left:1px solid #ccc;height:18px;line-height:18px;margin:3px 0 3px 116px;padding-left:4px;}
#hLinesBox{overflow: hidden;}
#hLinesBox .anim{transition: all 0.5s;margin-top: -18px;}
#hLinesBox  #linesList li{list-style: none;line-height: 18px;height: 18px;}
</style>