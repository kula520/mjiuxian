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
    </div>
</template>
<script>
import axios from "axios"
import '../mockjs/global'
import swipeImg from '../components/swipe/swipe'
import topApp from '../components/topApp/topApp'
import seach from '../home/components/seach'
export default {
    name:'home',
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        childValue: function (classStyle) {
        // classStyle就是子组件传过来的值
        this.isActive = classStyle
      }
    },
    mounted () {
        axios.get("http://localhost:8080/newjiuxian/navList").then((res)=>{
            this.$store.state.home.navLists = res.data.data
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
</style>