<template>
    <div class="seckillBD">
        <div class="seckillTil">
            <h4>掌上秒杀</h4>
            <div class="seckill fl" v-show="timeOver">
                <span class="rf moreIcon">更多商品等您来抢！</span>
                <span>距结束：</span>
                <span class="timeBj">{{day}}</span>:
                <span class="timeBj">{{hour}}</span>:
                <span class="timeBj">{{min}}</span>:
                <span class="timeBj">{{sed}}</span>
            </div>
        </div>
        <silodSwips></silodSwips>
    </div>
</template>
<script>
import silodSwips from '../../components/silodSwipe/silodSwipe'
export default {
    name:'seckill',
    data(){
        return {
            hour: '',
            minute: '',
            second: '',
            promiseTimer: '',
            scrollList:[],
            endTime:'2020-10-25 20:10:00',
            time : '',
            flag : false,
            day:'',
            hour:'',
            min:'',
            sed:'',
            timeOver:true
        }
    },
    components:{
        silodSwips
    },
    mounted() {   
        let time = setInterval(()=>{
            if(this.flag == true){
                clearInterval(time)
            }
            this.timeDown()
        },1000)  
    },
    methods:{
        timeDown () {
            const endTime = new Date(this.endTime)
            const nowTime = new Date();
            let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
            this.day = this.formate(parseInt(leftTime/(24*60*60)))
            this.hour = this.formate(parseInt(leftTime/(60*60)%24))
            this.min = this.formate(parseInt(leftTime/60%60))
            this.sed = this.formate(parseInt(leftTime%60))
            if(leftTime <= 0){
                this.flag = true
                this.timeOver = false
            }
        },
        formate (time) {
            if(time>=10){
                return time
            }else{
                return `0${time}`
            }
        }
    }
}
</script>
<style>
.seckillBD{position:relative;}
.seckillTil{height:16px;padding:5px 10px 9px;border-bottom:1px solid #ededed;color:#666;}
.seckillTil h4{font-size:14px;float:left;font-weight:bold;}
.seckillTil .seckill span{padding:0 5px;display:inline-block;font-size:12px;}
.seckillTil .seckill span.timeBj{width:16px;height:16px;text-align:center;line-height:16px;background-color:#858585;color:#fff;display:inline-block;padding:0;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;}
.seckillTil .seckill span.moreIcon{background:url('../../assets/moreIocn.png') no-repeat center right;padding:0 12px 0 0;display:inline-block;height:16px;line-height:16px;}
</style>