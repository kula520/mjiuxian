<template>
    <div>
        <ul class="bannerList">
            <li v-for="(lists,i) in bannerList" :key='i'><img v-lazy="lists.bannerImg"></li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
import '../../mockjs/home'
import { Lazyload } from 'mint-ui';
export default {
    name:'bannerList',
    data(){
        return {
            bannerList:[]
        }
    },
    mounted(){
        axios.get("newjiuxian/bannerLists").then((res)=>{
            this.bannerList = res.data.data
        }) 
    },
    lazyload: {
        preLoad: 1.3,
        //表示出错时显示的图片
        error: 'dist/error.png',
        //表示未加载之前显示的图片
        loading: 'dist/loading.gif',
        attempt: 1,
        filter: {
        webp(listener, options) {
        },
        },
    }
}
</script>
<style scoped>
img[lazy=loading] {
  width: 100%;
  height: auto;
}
.bannerList{margin:10px 5px;}
.bannerList li{width:100%;margin-bottom:5px;}
.bannerList li img{width:100%;height:auto;}
</style>