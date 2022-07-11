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
    //通过async和await将异步请求封装
    async submitRegister(context,user){
        const data = user;
        //发送请求
        await axios({
            url:'http://127.0.0.1:5000/Login',
                method:'POST',
                data: data,  
                headers:{
                'Content-Type':'application/json' //表明为JSON格式
                }
            }).then(res=>{
                sessionStorage.setItem('loginInfo',JSON.stringify(res.data))
                context.commit('LOGINSUBMIT',res.data); //数据存储到Vuex的state中
            })
    
    },
    getArticleList(context){
        axios.get(`http://127.0.0.1:5000/listarticles`).then(
            response=>{
                // console.log(response.data); //成功收到数据
                // this.$store.articleList=response.data;
                // console.log("action")
                sessionStorage.setItem('articleList', JSON.stringify(response.data))
                context.commit("GETARTICLELIST",response.data)
            },
            error=>{console.log('error了'+error)}
        )
    },
    updateArticle(context,item){
        const data = item;
        axios({
            url:`http://127.0.0.1:5000/articleEdit`,
                method:'POST',
                data: data,  
                headers:{
                'Content-Type':'application/json' //表明为JSON格式
                }
            }).then(res=>{
                    context.commit('UPDATEARTICLE',res.data);
                
            })
    }
}

//创建mutations,用于操作数据 传入两个参数(state,value)
const mutations = {
    GETARTICLELIST(state,data){
        state.articleList = data;
        // console.log('mutation')
    },
    LOGINSUBMIT(state,data){
        state.loginInfo=data;
    },
    UPDATEARTICLE(){
        this.dispatch("getArticleList");
    }
}

//创建state,用于存储数据
const state = {
    articleList:JSON.parse(sessionStorage.getItem('articleList')) ? JSON.parse(sessionStorage.getItem('articleList')) : [],
    loginInfo:JSON.parse(sessionStorage.getItem('loginInfo')) ? JSON.parse(sessionStorage.getItem('loginInfo')) : null,
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
