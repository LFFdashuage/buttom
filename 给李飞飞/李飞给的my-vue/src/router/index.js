import Vue from 'vue'
import Router from 'vue-router'


import Hello from '../page/Hello'
import Nvzhuang from '../page/Nvzhuang'
import Xiebao from '../page/Xiebao'
import Jujia from '../page/Jujia'
import Meizhuang from '../page/Meizhuang'
import Tongzhuang from '../page/Tongzhuang'
import Muying from '../page/Muying'
import Denglu from '../page/Denglu'

import Holleintem from '../page/Holleintem.vue'
import Gouwuche from '../SJYM/Gouwuche.vue'
import Ddd from '../SJYM/Ddd.vue'
import Fenlei from '../SJYM/Fenlei.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: Hello
    },
    {
      path: '/home/intem/:event_id',
      component: Holleintem
    },
    {
      path: "/Nvzhuang",
      component: Nvzhuang
    },
    {
      path: "/Xiebao",
      component: Xiebao
    },
    {
      path: "/Jujia",
      component: Jujia
    },
    {
      path: "/Meizhuang",
      component: Meizhuang
    },
    {
      path: "/Tongzhuang",
      component: Tongzhuang
    },
    {
      path: "/Muying",
      component: Muying
    },
    {
      path: "/Denglu",
      component: Denglu
    },
    {
      path: "/Gouwuche",
      component: Gouwuche
    },
    {
      path: "/Ddd",
      component: Ddd
    },
    {
      path: "/Fenlei",
      component: Fenlei
    },
  ]
})
