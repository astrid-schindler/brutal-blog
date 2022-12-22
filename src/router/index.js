import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from "@/components/Pages/HomePage/HomePage";
import AboutPage from "@/components/Pages/AboutPage/AboutPage";
import BlogOverview from "@/components/Pages/BlogOverview/BlogOverview";
import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import VideoPage from "@/components/Pages/VideoPage/VideoPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
    {
    path: '/blog',
    name: 'blog',
    component: BlogOverview
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/video-call',
    name: 'video-call',
    component: VideoPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
