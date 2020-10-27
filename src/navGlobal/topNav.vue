<template>
    <div class="topNavP">
        <div class="topNavbd">{{$store.state.sort.topTitle}}<span @click="prev">‹</span></div>
    </div>
</template>
<script>
export default {
    name:'topNav',
    methods:{
        prev(){
            this.$router.go(-1)
        }
    },
    mounted(){
        //获取本地缓存数据---sessionStorage 关闭窗口删除数据 localStorage 永久保存清除缓存才会清除数据
        var storage = window.sessionStorage;  
        this.$store.state.sort.topTitle = storage.title
    }
}
</script>
<style scoped>
.topNavP{position: fixed;top:0;left:0;width:100%;height:40px;z-index:999;}
.topNavbd{height:40px;line-height:40px;background-color:#de4943;color:#fff;position:relative;text-align:center;font-size:16px;}
.topNavbd span{display:block;position:absolute;top:0;left:0;width:40px;height:40px;text-align:center;line-height:36px;z-index:9;font-size:20px;}
</style>