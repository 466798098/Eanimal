import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../components/homepage.vue'
import category from '../components/category.vue'
import branch from '../components/branch.vue'
import goodslist from '../components/Goods-list/goods-list.vue'
import sort from '../components/sort.vue'
import brand from '../components/brand.vue'
import login from '../components/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {
      path:'/homepage',
      component:homepage
    },
    {
      path:'/category',
      component:category,
      children:[
        {
          path:'/category/sort',
          component:sort
        },
        {
          path:'/category/brand',
          component:brand
        },
        {
          path:'/category',
          redirect:'/category/sort'
        }
      ]
    },
    {
      path:'/branch/:type',
      component:branch,
      children:[{
        path:'/branch/:type/:goodstype',
        component:goodslist
      },
        {
          path:'/branch/:type',
          redirect:'/branch/:type/all'
        }
        ]
    },
    {
      path:'/',
      redirect:'/homepage'
    },
    {
      path:'/login',
      component:login
    }

    // {
    //   path:'/homepage',
    //   component:homepage
    // },
    // {
    //   path:'/homepage',
    //   component:homepage
    // }
  ]
})
