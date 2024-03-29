//该文件用于创建整个应用路由器
import VueRouter from 'vue-router'
//引入组件
import Login from '../pages/Login.vue'
// import Index from '../components/BannerBar.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Article from '../pages/Article.vue'
import ArticleContent from '../pages/ArticleContent.vue'
import Upload from '../pages/Upload.vue'
import Download from '../pages/Download.vue'
import ArticleEdit from '../pages/ArticleEdit.vue'
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
            name:'index',
            path:'/index',
            component:Home,
            meta:{title:'主页'},
        },
        {
            name:'Login',
            path:'/Login',
            component:Login,
            meta:{title:'登录'},
        },
        {
            name:'Message',
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
            path:'/Upload',
            name:'Upload',
            component:Upload,
            meta:{isAuth:true,title:'资料下载'}
        },
        {
            path:'/Download',
            name:'Download',
            component:Download,
            meta:{isAuth:true,title:'资料下载'}
        },
        {
            name:'Article',
            path:'/Article',
            component:Article,
        },
        {
            name:'ArticleContent',
            path:'/ArticleContent',
            component:ArticleContent,
            //props第三种写法，值为函数 这里用了连续解构赋值
                    /* props({query}){
                        return {
                            id:query.id,
                            title:query.title
                        }
                    } */
        },
        {
            name:'ArticleEdit',
            path:'/ArticleEdit',
            component:ArticleEdit,
            meta:{isAuth:true,title:'文章编辑'}
        }

    ]
})

//全局前置路由守卫 初始化以及每次路由切换前被调用
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth === true){ //判断是否需要验证权限
        if(sessionStorage.loginInfo && JSON.parse(sessionStorage.loginInfo).roleID == '1'){
            document.title = to.meta.title || '主页'
            next();
        }else{
            console.log('无权限！')
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