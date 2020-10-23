<template>
    <div class="specialBd">
        <h4 class="spTitle">{{specialObj.spTitle}}</h4>
        <div class="special">
            <div class="specialL lf"><a :href="specialObj.imgLurl" target="_blank"><img v-lazy="specialObj.imgL"></a></div>
            <div class="specialR rf">
                <div class="specialRT"><a :href="specialObj.imgRTurl" target="_blank"><img v-lazy="specialObj.imgRT"></a></div>
                <div class="specialRB">
                    <a v-for="img in specialObj.imgBList" :href="img.imgBurl" target="_blank"><img v-lazy="img.imgB"></a>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import { Lazyload } from 'mint-ui';
export default {
    name:'specialPage',
    props:{
        specialObj: {
            type: Object,
            default () {
                return {
                    spTitle:'title',
                    imgL:'',
                    imgLurl:'',
                    imgRT:'',
                    imgRTurl:'',
                    imgBList:[
                        {
                            imgB:'',
                            imgBurl:''
                        },
                        {
                            imgB:'',
                            imgBurl:''
                        }
                    ]
                }
            }
        }
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
.specialBd{padding:5px 0;}
.spTitle{height:40px;padding:0 10px;background-color:#f1f1f1;font-size:20px;line-height:40px;font-weight:bold;}
.special{width:100%;}
.special img{width:100%;height:auto;}
.special .specialL{width:40%;}
.special .specialR{width:60%;}
.special .specialRT{height:50%;width:100%;}
.special .specialRB{height:50%;width:100%;}
.special .specialRB img{width:50%;height:auto;}
</style>