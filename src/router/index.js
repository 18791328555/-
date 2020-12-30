import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import NewContact from '@/components/NewContact'




import index from '@/pages/index'
import fail from '@/pages/404'
import login from '@/pages/login'
import baojing from '@/pages/baojing'
import guanli from '@/pages/guanli'
import server from '@/pages/server'
import use from '@/pages/use'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: index,
      children:[
        {
          path: '/fail',
    
          component: fail
        },
        {
          path: '/baojing',
    
          component: baojing
        },
        {
          path: '/guanli',
    
          component: guanli
        },
        {
          path: '/login',
    
          component: login
        },
        {
          path: '/server',
    
          component: server
        },
        {
          path: '/use',
    
          component: use
        },
        
     
      ]
      
    },
  
 
  
   
      
    

 
  ]
})
