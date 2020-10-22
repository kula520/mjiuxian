<template>
    <div>
        <div class="fixdScollbd">
            <div class="sigFix lf mr5">
                <ul>
                    <li v-for="item in $store.state.home.fixdListLDatas">
                        <img :src="item.shopImg">
                        <p>{{item.shopTil}}</p>          
                        <p><span>¥{{item.price}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="sigFix rf">
                <ul>
                    <li v-for="item in $store.state.home.fixdListRDatas">
                        <img :src="item.shopImg">
                        <p>{{item.shopTil}}</p>                        
                        <p><span>¥{{item.price}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="clerafix"></div>
        </div>
        <div class="upLoading" v-show="$store.state.home.upLoading">数据正在加载中........</div>
    </div>
</template>
<script>
import axios from "axios"
import '../../mockjs/home'
export default {
    name:'fixdScoll',
    data(){
        return {
        }
    },
    mounted(){
        this._fixdData()
    },
    methods:{
        _fixdData(){
            axios.get("newjiuxian/fixdScollLists").then((res)=>{
                let resData = res.data.data
                for(let i=0;i<resData.length;i++){
                    if(i < 10){
                        this.$store.state.home.fixdListLDatas.push(resData[i])
                    }else{
                        this.$store.state.home.fixdListRDatas.push(resData[i])
                    }
                }
            })            
        },
        loadMore() {
            this.$store.state.home.page++;
            if(this.$store.state.home.upLoading) {
                axios.get("newjiuxian/fixdScollLists",{
                    page: this.$store.state.home.page,
                    pagesize: 10
                })
                .then(res => {     
                    let lenDtat = res.data.data                            
                    if(lenDtat.length > 0) { 
                        this.$store.state.home.upLoading = true;
                        for(let i=0;i<lenDtat.length;i++){
                            if(i < 10){
                                this.$store.state.home.fixdListLDatas.push(lenDtat[i])
                            }else{
                                this.$store.state.home.fixdListRDatas.push(lenDtat[i])
                            }
                        }    
                    }else{                        
                        this.$store.state.home.upLoading = false;
                    }
                })
            }             
        }
    },
    created() {
        let that = this
        window.onscroll = function(){
            // scrollTop 滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // windowHeight 可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            // scrollHeight 滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            // 滚动条到底部的条件
            if(scrollTop + windowHeight == scrollHeight){
                 that.loadMore();
            }
        }
    }
}
</script>
<style scoped>
.fixdScollbd{width:100%;}
.sigFix{width:49.1%;}
.sigFix.mr5{margin-right:5px;}
.sigFix li{margin-bottom:5px;}
.sigFix li img {width:100%;height:auto;}
.sigFix li p{padding:0 5px;font-size:12px;line-height:18px;}
.sigFix li p span{color:#fc5a5a}
.upLoading{text-align:center;color:#999;margin:5px;}
</style>
