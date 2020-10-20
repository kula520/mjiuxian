<template>
    <div class='move-tabs'>
        <div class='tabs-wrapper' ref='tabsWrapper'>
            <ul ref='tab'>
                <li v-for="item in shopListData">
                    <div class='tab-item'><img :src="item.shopImg">
                        <p class="title">{{item.shopTil}}</p>
                        <p><span class="price">{{item.price}}</span><br><s>{{item.price}}</s></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import '../../mockjs/home'
import BScroll from 'better-scroll' 
export default {
    data() {
        return {
            shopListData:[],
            mX:0,
            tabWidth:120
        }
    },
    mounted() {
        this.$nextTick(() => {
            axios.get("newjiuxian/shopLists").then((res)=>{
                this.shopListData = res.data.data
                this.initMenu()
            }) 
        })
    },
    methods: {
        initMenu() {
            const tabsWidth = this.tabWidth
            const width = this.shopListData.length * tabsWidth
            this.$refs.tab.style.width = `${width}px`
                this.$nextTick(() => {
                    if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.tabsWrapper, {
                        scrollX: true,
                        eventPassthrough: 'vertical',
                    })
                } else {
                    this.scroll.refresh()
                }
            })
        }
    }
}
</script>
<style scoped>
.move-tabs{position: relative;top:0;bottom:0;width: 100%;}
.tabs-wrapper{height:200px;width:100%;box-sizing:border-box;overflow:hidden;}
.tab-item{float:left;width:110px;height:180px;padding:10px 5px;overflow:hidden;font-size:12px;}
.tab-item img{width:110px;height:110px;}
.tab-item p{line-height:16px;padding:2px 5px 0;width:110px;height:36px;overflow:hidden;}
.tab-item .price{color:#fc5a5a;font-weight:bold}
</style>