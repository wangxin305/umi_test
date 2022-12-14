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
      name:'้ฆ้กต',
      path:'/',
      component: '@/pages/index'
    },
    {
      name:'ๆ้',
      path:'/permissions',
      component:'@/pages/permissions',
      access:'auth',
    }
  ]
})
