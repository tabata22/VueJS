import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBase from "@/components/DataBase";
import AddProduct from "@/components/AddProduct";
import Products from "@/components/Products";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/database',
      name: 'DataBase',
      component: DataBase
    },
    {
      path: '/addproduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
