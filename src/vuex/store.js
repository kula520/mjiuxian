import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//首页数据
const homeData = {
state: () => ({ 
    navLists:[],
    objData:[],
    // 手机验证参数
    inputValChild:'',
    inputData:{                
        title: "请输入手机号，如未注册则给您注册喽~！",
        error: "",
        isActive: false,
    },
    // 随机数验证码
    yzmVal:'',
    validCode:'',
    timeout: null,
    error:'验证码错误！',
    isYzmFalse:false,
    isYzmTrue:false
}),
mutations: { 
    increment (state) {
    // 这里的 `state` 对象是模块的局部状态
        
    }
    },
actions: { 
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
        if ((state.count + rootState.count) % 2 === 1) {
            commit('increment')
        }
    }
    },
getters: { 
    
    }
}

const loginData = {
    state: () => ({ 
        
    })
}

export default new Vuex.Store({
    modules:{
        home:homeData,
        logon:loginData
    }
})