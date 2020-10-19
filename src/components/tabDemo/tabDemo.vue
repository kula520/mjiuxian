
<template>
  <div class="loginBD">
    <div> 
      <ul class="tabNav">
        <li v-for="(item,index) in menu" :key="index" ><span :class="{active : ( isActive == item.value ? true : false )}" @click="isActive = item.value;currentComp = item.comp">{{item.name}}</span></li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div>
      <loginUser :is="currentComp"></loginUser>
    </div>
  </div>
</template>
<script>
import loginUser from './tabLogin/loginUser'
import loginPhone from './tabLogin/loginPhone'
export default {
  data () {
    return {
      currentComp: 'loginUser',
      isActive: '1',
      menu: [
        {
          name: '账号登录',
          value: '1',
          comp: 'loginUser'
        },
        {
          name: '手机动态密码登录',
          value: '2',
          comp: 'loginPhone'
        }
      ]
    }
  },
  components: {
    loginUser,
    loginPhone
  }
}
</script>
<style>
.loginBD{width:80%;margin:20px 10%;}
.loginBD .tabNav{height:30px;}
.loginBD .tabNav li{width:50%;float:left;}
.loginBD .tabNav li:last-child{text-align:right;}
.loginBD .tabNav li span.active{border-bottom:2px solid #de4943;color:#de4943;}
</style>
