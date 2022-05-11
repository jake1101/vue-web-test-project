import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sample1',
      name: 'sample1',
      component: () => import('../views/Sample1View.vue'),
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: () => import('../views/Sample2View.vue'),
    },
  ],
});

export default router;
