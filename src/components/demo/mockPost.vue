<template>
  <div class="hello">
    <button @click="submitBtn">保存</button>  
  </div>
</template>

<script>
import '../mockjs/index'
import api from '../severs/global.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    submitBtn() {
      api.mockdata("/data/index").then(res => {
        console.log(res);
      }); 
    }
  }
}
</script>

<style scoped>

</style>
