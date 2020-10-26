<template>
    <div class="topNavbd">{{title}}<span @click="prev">‹</span></div>
</template>
<script>
export default {
    name:'topNav',
    props:['title'],
    methods:{
        prev(){            
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.topNavbd{height:40px;line-height:40px;background-color:#de4943;color:#fff;position:relative;text-align:center;font-size:16px;}
.topNavbd span{display:block;position:absolute;top:0;left:0;width:40px;height:40px;text-align:center;line-height:36px;z-index:9;font-size:20px;}
</style>