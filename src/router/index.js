import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/components/Pages/HomePage/HomePage";
import AboutPage from "@/components/Pages/AboutPage/AboutPage";
import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import VideoPage from "@/components/Pages/VideoPage/VideoPage";
import LoginPage from "@/components/Pages/LoginPage/LoginPage";
import ServicesPage from "@/components/Pages/ServicesPage/ServicesPage";
import PhotographyPage from "@/components/Pages/PhotographyPage/PhotographyPage";
import BlogEntry_GraphQL from "@/components/Pages/BlogEntry/BlogEntry_GraphQL";
import BlogOverview_GraphQL from "@/components/Pages/BlogOverview/BlogOverview_GraphQL";

var routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog',
    redirect: '/projects'
  },
  {
    path: '/photography',
    name: 'photography',
    component: PhotographyPage
  },
  {
    path: '/projects',
    name: 'projects',
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
    path: '/leistungen',
    name: 'leistungen',
    component: ServicesPage
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

var router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
