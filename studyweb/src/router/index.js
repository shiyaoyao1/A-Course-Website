//该文件用于创建整个应用路由器
import VueRouter from 'vue-router'
//引入组件
import Login from '../pages/Login.vue'
// import Index from '../components/BannerBar.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Article from '../pages/Article.vue'
//创建并暴露一个路由器
const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:Home,
            meta:{title:'主页'},
            //  directives:'/Login',
         
        },
        {
            path:'/index',
            component:Home,
            meta:{title:'主页'},
        },
        {
            path:'/Login',
            component:Login,
            meta:{title:'登录'},
        },
        {
            path:'/Message',
            component:Message,
            meta:{isAuth:true,title:'消息'},
            children:[
                {
                    path:'News',
                    component:News,
                    //props第三种写法，值为函数 这里用了连续解构赋值
                    /* props({query}){
                        return {
                            id:query.id,
                            title:query.title
                        }
                    } */
                }
            ]
        },
        {
            path:'/Article',
            component:Article
        },

    ]
})

//全局前置路由守卫 初始化以及每次路由切换前被调用
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth === true){ //判断是否需要验证权限
        if(localStorage.isAdmin === '1'){
            document.title = to.meta.title || '主页'
            next();
        }else{
            alert('无权限')
        }
    }else{
        document.title = to.meta.title || '主页'
        next();
    }
    
})

/* //后置路由守卫
router.afterEach((to,from)=>{
    
}) */
export default router