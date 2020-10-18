<template>
    <div class="topApp" v-show="showTop">
        <div class="topAppl"><span @click="closeBtn()">×</span><i></i><p>打开酒仙网APP<br>新人领198元礼包</p></div>
        <div class="topAppr"><a href="#">立即打开 </a></div>
    </div>
</template>
<script>

export default {
    name:'topApp',
    data(){
        return {
            showTop:true,
            classTop:false
        }
    },
    methods:{
        closeBtn(){
            this.showTop = false;
            this.classTop = true
            this.$emit('classStyle', this.classTop)
        }
    }
}
</script>
<style scoped>
.topApp{height:40px;background:#2e2e2e;}
.topAppl{width:69%;float:left;}
.topAppl span{display:block;color:#fff;width:18px;height:18px;text-align:center;line-height:18px;border:1px solid #fff;float:left;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;margin:10px 5px 0 5px;}
.topAppl i{display:block;background:url('../../assets/logoTop.png') no-repeat;width:30px;height:30px;margin:5px;float:left;}
.topAppl p{padding:5px 0;color:#fff;text-align:center;line-height:15px;font-size:12px;}
.topAppr{width:30%;float:right;}
.topAppr a{display:block;width:100%;height:40px;line-height:40px;text-align:center;color:#fff;background:#e62929;}
</style>