<template>
    <div>
        <mt-swipe :auto="4000" class="mint-swipe" :style="{'height': imgInfo.height + 'px'}">
            <mt-swipe-item v-for="data in this.$store.state.home.objData" :key="data.id"><img :src="data.newsImage" alt="" srcset=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import axios from "axios";
import '../../mockjs/global'
export default {
    name:'swipe',
    data(){
        return {
            imgInfo: {}
        }
    },
    created () {
        axios.get("mjiuxian/swipeImg").then((res)=>{
            this.$store.state.home.objData = res.data.data
            let dataList = this.$store.state.home.objData
            let img = new Image()
            img.src = dataList[0].newsImage
            const w = document.body.clientWidth
            const vm = this
            img.addEventListener('load', function () {
                const hei = img.height
                const wid = img.width
                const imgInfo = hei * w / wid  //通过计算图片与屏幕的宽度比，得出图片的实际显示高度，赋给imgInfo
                vm.$set(vm.imgInfo, 'height', imgInfo)
            })
        })
        
    }
}
</script>
<style scoped>
.mint-swipe img{width:100%;height:100%;}
</style>