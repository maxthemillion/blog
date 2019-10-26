import Vue from 'vue'
import Router from 'vue-router'
import Bloghome from '@/views/Bloghome.vue'
import Home from '@/views/Home.vue'

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
      path: '/blog',
      name: 'blog',
      component: Bloghome
    },
    ...blogRoutes
  ]
})