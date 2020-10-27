<template>
    <div>
        <topNav></topNav>
        <div class="bj">
            <div class="userInfobd">
                <img src="../assets/touxiang.jpg">
                <div class="userInfo">
                    <h4>jxw88888888</h4>
                    <p>下载客户端 美酒随时抢</p>
                </div>
            </div>
            <div class="userNavbj"></div>
            <div class="userNav">
                <div class="userNum">LV1 酒虫</div>
                <div class="userNavList">
                    <div class="userNavListbd">
                        <ul>
                            <li><span>0</span><span>待付款</span><div class="line">1</div></li>
                            <li><span>0</span><span>待发货</span><div class="line">1</div></li>
                            <li><span>0</span><span>待收获</span><div class="line">1</div></li>
                            <li><span>0</span><span>已完成</span><div class="line">1</div></li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="userInfoSrot">
            <ul>
                <li><a href="#"><img src="../assets/userImg/order.png"><p>全部订单</p></a></li>
                <li><a href="#"><img src="../assets/userImg/cart.png"><p>购物车</p></a></li>
                <li><a href="#"><img src="../assets/userImg/unreceived-icon.png"><p>待领取</p></a></li>
                <li><a href="#"><img src="../assets/userImg/exchange.png"><p>去兑换</p></a></li>
                <li><a href="#"><img src="../assets/userImg/coupon.png"><p>我的优惠券</p></a></li>
                <li><a href="#"><img src="../assets/userImg/history.png"><p>浏览历史</p></a></li>
                <li><a href="#"><img src="../assets/userImg/wallet.png"><p>我的钱包</p></a></li>
                <li><a href="#"><img src="../assets/userImg/collect.png"><p>我的收藏</p></a></li>
                <li><a href="#"><img src="../assets/userImg/address.png"><p>地址管理</p></a></li>
                <li><a href="#"><img src="../assets/userImg/safe.png"><p>账户安全</p></a></li>
            </ul>
        </div>
        <div class="userbtn"><mt-button type="danger">退出登录</mt-button></div>        
    </div>
</template>
<script>
import axios from "axios"
import topNav from '../navGlobal/topNav'
export default {
    name:'userIndex',
    components:{
        topNav
    }
}
</script>
<style scoped>
.bj{background:url('../assets/topBg.jpg') no-repeat 0 0/100% auto;width:100%;height:145px;position: relative;top:40px;}
.bj .userInfobd{padding:10px;position:relative;}
.bj .userInfobd img{width:80px;height:80px;border:4px solid #fff;box-shadow:0 0 4px #555;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;position:absolute;top:10px;left:10px;}
.bj .userInfo{margin:20px 0 20px 110px;line-height:20px;font-size:14px;}
.bj .userInfo h4{color:#fa281b;font-weight:bold;margin-bottom:5px;}
.bj .userNav,.bj .userNavbj{height:40px;position:absolute;bottom:0;left:0;width:100%;}
.bj .userNavbj{background-color:#fff;z-index:8;opacity:0.6;}
.bj .userNav{z-index:10;}
.bj .userNav .userNum{background-color:#fa281b;width:88px;height:40px;line-height:40px;color:#fff;font-size:16px;text-align:center;position:absolute;bottom:0;left:10px;}
.bj .userNav .userNavList{margin-left:110px;}
.bj .userNav .userNavListbd{width:100%;overflow:hidden;}
.bj .userNav .userNavList ul{width:105%;}
.bj .userNav .userNavList ul li{display:inline-block;width:23%;position:relative;height:30px;padding:5px 0;}
.bj .userNav .userNavList ul li .line{position:absolute;width:1px;background-color:#ccc;top:0;right:0;opacity:0.5;height:40px;overflow:hidden;}
.bj .userNav .userNavList ul li span{display:block;text-align:center;line-height:15px;}
.userInfoSrot{margin:60px 0 20px;}
.userInfoSrot li{box-sizing: border-box;width:32.3%;padding:0 5%;display:inline-block;margin-bottom:10px;}
.userInfoSrot li img{width:100%;height:auto;}
.userInfoSrot li p{display:block;text-align:center;line-height:24px;}
.userbtn{margin:10px 10px 50px;}
</style>