import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: JobsDetails,
    props: true,
  }, 
  //redirection
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catch 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
