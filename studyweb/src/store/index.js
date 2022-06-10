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
    async submitRegister(context,user){
        const data = user;
        await axios({
            url:'http://127.0.0.1:5000/Login',
                method:'POST',
                data: data,  //这里json对象会转换成json格式字符串发送
                headers:{
                'Content-Type':'application/json'  //如果写成contentType会报错,如果不写这条也报错
                //Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
                }
            }).then(res=>{
                
                context.commit('LOGINSUBMIT',res.data);
                
            })
    
    },
    getArticleList(context){
        axios.get(`http://127.0.0.1:5000/listarticles`).then(
            response=>{
                // console.log(response.data); //成功收到数据
                // this.$store.articleList=response.data;
                console.log("action")
                context.commit("GETARTICLELIST",response.data)
            },
            error=>{console.log('error了'+error)}
        )
    }
}

//创建mutations,用于操作数据 传入两个参数(state,value)
const mutations = {
    GETARTICLELIST(state,data){
        state.articleList = data;
        console.log('mutation')
    },
    LOGINSUBMIT(state,data){
        state.loginInfo=data;
    }
}

//创建state,用于存储数据
const state = {
    
    
}

//可选属性getters
const getters ={
    articleList(){
        return state.articleList;
    },
    loginInfo(){
        return state.loginInfo;
    },
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
