<template>
    <div v-show="showTime">
        <div class="topSeach">
            <span>‹</span>
            <div class="seachBD"><input type="text" v-model="inputVal" :input="inputVal" @focus="focusColor" @blur="blurColor" :class="{'active':isActive}"></div>
            <mt-button type="primary" class="btn" @click="seachClick">搜索</mt-button>
            <div class="topSeachList" v-if='inputListShow'>
                <ul>
                    <li v-for="(hotList,index) in inptListArray" :key='index'><a href="">{{hotList.hot}}</a></li>
                </ul>
            </div>
        </div>
        <div class="seachHot">
            <h4><em class="icon hotIcon"></em>热门搜索</h4>
            <ul class="seachHotList">
                <li v-for="hotList in hotListArray" :key='hotList.id'><a :href="hotList.url" :class="{'current':hotList.color}">{{hotList.hot}}</a></li>
            </ul>
            <div class="clearfix"></div>            
            <h4><em class="icon retIcon"></em>最近搜索</h4>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import '../../mockjs/home'


export default {
    name:'seachList',
    data(){
        return {
            inputVal:'贵州茅台',
            timeout: null,
            inputListShow:false,
            inptListArray:[],
            isActive:false,
            hotListArray:[],
            showTime:true
        }
    },
    methods:{
        focusColor(){
            this.isActive = true;
        },
        blurColor(){
            this.isActive = false;
        },
        seachClick(){

        }
    },
    mounted () {
        axios.get("newjiuxian/hotList").then((res)=>{
            this.hotListArray = res.data.data
        })
    },
    watch:{
        // let data = {"code":'',"hot":this.seachVal}
        // axios.post("newjiuxian/seachList",data)
        // .then((res)=>{
        //     console.log(res)
        // })
        inputVal(curVal, oldVal) {
            // 实现input连续输入，只发一次请求
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                let data = {"code":'',"hot":this.inputVal}
                axios.post("newjiuxian/seachList").then((res)=>{
                    this.inptListArray = res.data.data
                    this.inputListShow = true
                })
            },500);
        }
    }
}
</script>
<style scoped>
.topSeach{height:28px;padding:5px;background-color:#fafafa;border-bottom:1px solid #e4e4e4;line-height:28px;position:relative;}
.topSeach span{width:28px;height:28px;display:block;text-align:center;color:#555;font-size:30px;line-height:24px;position:absolute;top:5px;left:0;}
.topSeach .btn{position:absolute;right:5px;top:5px;width:50px;height:28px;text-align:center;font-size:12px;background-color:#fafafa;border:1px solid #fafafa;color:#555;}
.topSeach .seachBD{margin:0 55px 0 33px;background:#ececec url('../../assets/seachIcon.png') no-repeat 0 0;padding:0 2px;height:28px;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;}
.topSeach .seachBD input{width:100%;height:28px;line-height:28px;color:#999;background:#ececec;border:1px solid #ececec;}
.topSeach .seachBD input.active{color:#333;}
.seachHot h4{font-size:14px;height:24px;line-height:24px;color:#333;margin:10px;}
.seachHot h4 em{display:inline-block;width:16px;height:16px;position:relative;top:3px;margin-right:5px;background-size:120px 40px;}
.seachHot h4 .hotIcon{background-position:-62px 0;}
.seachHot h4 .retIcon{background-position:-84px 0;}
.seachHotList{margin:0 10px;} 
.seachHotList li{height:24px;line-height:24px;margin:0 8px 5px 0;display:inline-block;}
.seachHotList li a{display:block;padding:0 20px;background-color:#f4f4f4;color:#666;height:24px;line-height:24px;border-radius:12px;-moz-border-radius:12px;-webkit-border-radius:12px;}
.seachHotList li a.current{color:#fc5a5a}
.topSeachList{background:#fff;position:absolute;top:38px;border:1px solid #e4e4e4;z-index:999;left:-1px;width:100%;border-bottom:0;}
.topSeachList li{height:40px;line-height:40px;padding:0 10px;border-bottom:1px solid #e4e4e4;font-size:18px;}
</style>