//该文件用于创建vuex中store

//引入Vuex
import Vuex from 'vuex'

//引入axios
import axios from 'axios'

//应用Vuex插件
import Vue from 'vue'
Vue.use(Vuex);

//创建actions,用于响应组件中的动作 传入两个参数(context,value)
const actions = {
    submitRegister(){
        new Promise((resolve,reject)=>{
            if(axios.get('http://127.0.0.1:5000/Login')){
                resolve()
            }else{
                reject()
            }
        }).then()
    },
    getArticle(context,value){
        console.log(context);
        axios.get(`http://127.0.0.1:5000/listarticles?id=${{value}}`).then(
            response=>{
                console.log(response.data);
                this.$store.commit(state,response.data)
            },
            error=>{console.log('error了'+error)}
        )
    }
}

//创建mutations,用于操作数据 传入两个参数(state,value)
const mutations = {

}

//创建state,用于存储数据
const state = {

}

//可选属性getters0
/* const getters ={

} */
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
