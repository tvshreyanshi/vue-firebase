import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogsView from '../views/BlogsView.vue';
import LogIn from '../views/LogInView.vue';
import Register from '../views/RegisterView.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsView,
    meta: {
      title: 'Blogs',
    },
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
    meta: {
      title: 'LogIn',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Blogs',
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 'FireBlog`;
  next();
});

export default router;
