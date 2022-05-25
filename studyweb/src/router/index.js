//该文件用于创建整个应用路由器
import VueRouter from 'vue-router'
//引入组件
import Login from '../pages/Login.vue'
import BannerBar from '../components/BannerBar.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:BannerBar,
            children:[
                {
                    path:'Home',
                    component:Home,
            },
            {
                path:'Message',
                component:Message,
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
            }
        ]
        },
        {
            path:'/Login',
            component:Login
        },
    ]
})