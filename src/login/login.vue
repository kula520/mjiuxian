<template>
    <div>
        <topNav :title='newTitle'></topNav>
        <div>
            <tab></tab>
        </div>
    </div>
</template>
<script>
import topNav from '../components/topNav/topNav'
import tab from '../components/tabDemo/tabDemo'
export default {
    name:'login',
    data(){
        return {
            newTitle:'用户登录'
        }
    },
    components:{
        topNav,
        tab
    }
}
</script>
<style scoped>

</style>