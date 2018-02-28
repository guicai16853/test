import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import auth from '@/page/auth'
import test from '@/page/test'
import personalHome from '@/page/personalHome'
import dropDown from '@/components/common/dropDown'
import shophome from '@/page/shop/shophome'
import goods from '@/page/shop/goods'
import goodsindex from '@/components/shop/goods/goodsindex'
import set from '@/page/set/set'
import personaldata from '@/page/set/personal-data'
import newconsignee from '@/page/set/NewConsignee'
import revisePsd from '@/page/set/revisePsd'
import reviseHead from '@/page/set/revieseHead'
import reviseName from '@/page/set/reviseName'
import setSex from '@/page/set/setSex'
import orderDetail from '@/page/order/orderDetail'
import myOrder from '@/page/order/myOrder'
import cartEditor from '@/page/shopingCart/cartEditor'
import Address from '@/page/shopingCart/Address'
import emptyCart from '@/page/shopingCart/emptyCart'
import emptyOrder from '@/page/shopingCart/emptyOrder'
import firmOrder from '@/page/shopingCart/firmOrder'
Vue.use(Router)

var router = new Router({
  routes: [
    {path: '/',
    component: home
    },{path: '/auth',
    component: auth
    },{path: '/personalHome',
      component: personalHome,
    },{path: '/test',
    name:'',
    component: test
    },{path: '/dropDown',
    name:'',
    component: dropDown
    },{path: '/shophome',
      component: shophome,
    },{path: '/newconsignee',
    name:'',
    component: newconsignee
    },{path: '/revisePsd',
    name:'',
    component: revisePsd
    },{path: '/goodsindex',
    name:'',
    component: goodsindex
    },{path: '/goods',
      component: goods
    },{path:'/set',
      component: set,
      children: [
      {path:'/',component:personaldata},
      {path:'reviseHead',component:reviseHead},	    	
      {path:'reviseName',component:reviseName},	
      {path:'setSex',component:setSex},	
      ]
    },{path: '/orderDetail',
    component: orderDetail
    },{path: '/myOrder',
    component: myOrder
    },{path: '/cartEditor',
    component: cartEditor
    },{path: '/Address',
    component: Address
    },{path: '/emptyCart',
    component: emptyCart
    },{path: '/emptyOrder',
    component: emptyOrder
    },{path: '/firmOrder',
    component: firmOrder
 },

  ]
})

/*	router.beforeEach((to, from, next) => {
		 var token = window.localStorage.getItem('token');
		 console.log('home:====================='+token);
	   if(to.path !== '/auth' && !token){
	    window.localStorage.setItem('beforeLoginUrl',to.fullPath);
	    next('/auth');
	    return false;
	   }else{
	      next()
	    }
	  })   */



export default router