import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'cnpm',
  layout:{
    layout: 'side',
  },
  access:{},
  initialState:{},
  model:{},
  routes:[
    {
      name:'首页',
      path:'/',
      component: '@/pages/index'
    },
    {
      name:'权限',
      path:'/permissions',
      component:'@/pages/permissions',
      access:'auth',
    }
  ]
})
