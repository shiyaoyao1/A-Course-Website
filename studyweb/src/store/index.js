//该文件用于创建vuex中store

//引入Vuex
import Vuex from 'vuex'

//应用Vuex插件
import Vue from 'vue'
Vue.use(Vuex);

//创建actions,用于响应组件中的动作 传入两个参数(context,value)
const actions = {}

//创建mutations,用于操作数据 传入两个参数(state,value)
const mutations = {}

//创建state,用于存储数据
const state = {}

//可选属性getters0
/* const getters ={

} */
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
