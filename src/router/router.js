import Vue from 'vue'
import Router from 'vue-router'
import Bloghome from '@/views/Bloghome.vue'
import Home from '@/views/Home.vue'
import DataViz from '@/views/DataViz.vue'
import Impressum from '@/views/Impressum.vue'
import About from '@/views/About.vue'
import Foto from '@/views/Foto.vue'

Vue.use(Router)

import BlogEntries from '@/statics/blogposts.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    component: () => import('@/components/Blogpostcontent.vue'),
    props:{
      images: child.images,
    },
    children:[
      {
        path: '',
        name: child.id,
        component: () => import(`@/markdown/${section}/${child.id}.md`)
      }
    ]
    }))

  return {
    path: `/${section}`,
    name: section,
    component: () => import('@/views/Blogpost.vue'),
    props:{test: true},
    children
  }
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
        path:'/about',
        name:'about',
        component: About
    },
    {
      path:'/impressum',
      name:'impressum',
      component: Impressum
    },
    {
      path:'/dataViz',
      name:'dataViz',
      component: DataViz
    },  
    {
      path:'/foto',
      name:'foto',
      component: Foto
    },
    {
      path: '/blog',
      name: 'blog',
      component: Bloghome
    },
    ...blogRoutes
  ]
})