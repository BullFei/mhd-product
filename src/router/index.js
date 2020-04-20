import Vue from 'vue'
import VueRouter from "vue-router";

import Home from "../views/Home";
import Classify from "../views/Classify";
import Hello from "../views/Hello";
import Favorite from "../views/Hello/Favorite";
import History from "../views/Hello/History";
import Login from "../views/Login";
import Register from "../views/Resgiter";
import My from "../views/My";
import Search from "../views/Search";
import SearchResult from "../views/SearchResult";
import Vip from "../views/Vip";


Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path: "/home", component: Home},
    {path: "/classify", component: Classify},
    {
      path: "/hello", 
      component: Hello,
      children: [
        {path: "favorite", component: Favorite},
        {path: "history", component: History}
      ]
    },
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/my", component: My},
    {path: "/home", component: Home},
    {path: "/search", component: Search},
    {path: "/searchResult", component: SearchResult},
    {path: "/vip", component: Vip},
    {path: "/", redirect: "/home"}
  ]
});

export default router;