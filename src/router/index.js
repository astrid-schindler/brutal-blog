import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/components/Pages/HomePage/HomePage";
import AboutPage from "@/components/Pages/AboutPage/AboutPage";
import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import VideoPage from "@/components/Pages/VideoPage/VideoPage";
import LoginPage from "@/components/Pages/LoginPage/LoginPage";
import BlogEntry_GraphQL from "@/components/Pages/BlogEntry/BlogEntry_GraphQL";
import BlogOverview_GraphQL from "@/components/Pages/BlogOverview/BlogOverview_GraphQL";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogOverview_GraphQL
  },
  {
    path: '/blogpost/:id',
    name: 'blogpost',
    component: BlogEntry_GraphQL
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
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'auto' });
  }
})

export default router
