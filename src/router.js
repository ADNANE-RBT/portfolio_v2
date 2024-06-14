import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  
    {
      meta: {
        title: 'Home'
      },
      path: '/',
      name: 'index',
      component: () => import('./pages/Index.vue'),
    },
    // {
    //   meta: {
    //     title: 'Chat'
    //   },
    //   path: '/chat',
    //   name: 'chat',
    //   component: () => import('@/pages/Chat.vue')
    // },
    // {
    //   meta: {
    //     title: 'Signin'
    //   },
    //   path: '/signin',
    //   name: 'signin',
    //   component: () => import('@/pages/Signin.vue')
    // },
    // {
    //   meta: {
    //     title: 'Register'
    //   },
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('@/pages/Register.vue')
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
