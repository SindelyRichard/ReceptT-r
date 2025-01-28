import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/mainPage.vue';
import RecipeDetails from '../components/recipeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/recipe/:name',
    name: 'recipe',
    component: RecipeDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
