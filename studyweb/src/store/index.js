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

    //登陆注册请求
    async submitRegister(context,user){
        const data = user;
        //发送请求
        try {let res = await axios({
            url:'http://127.0.0.1:5000/Login',
                method:'POST',
                data: data,  
                headers:{
                'Content-Type':'application/json' //表明为JSON格式
                }
            });
            sessionStorage.setItem('loginInfo',JSON.stringify(res.data))
            context.commit('LOGINSUBMIT',res.data); //数据存储到Vuex的state中
            } catch(err){
                console.log(err)
            }
    
    },

    //获取文章列表
    async getArticleList(context){
        try{let response = await axios({
            url:"http://127.0.0.1:5000/listarticles",
            method:'GET',
        });
            // console.log(response.data); //成功收到数据
            // this.$store.articleList=response.data;
            // console.log("action")
            sessionStorage.setItem('articleList', JSON.stringify(response.data))
            context.commit("GETARTICLELIST",response.data)
        }catch(err){
            console.log(err);
        }
        
    },

    //更新文章信息
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
