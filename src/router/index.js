import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import CreateQuizView from '../views/admin/CreateQuizView.vue'
import HomeAdminView from '../views/admin/HomeAdminView.vue'
import ListQuizView from '../views/admin/ListQuizView.vue'
import ListUserView from '../views/admin/ListUserView.vue'
import UpdateQuizView from '../views/admin/UpdateQuizView.vue'
import UpdateUserView from '../views/admin/UpdateUserView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
  {
    path: '/admin',
    name: 'admin',
    component: HomeAdminView
  },
  {
    path: '/admin/quiz/create',
    name: 'quiz create',
    component: CreateQuizView
  },
  {
    path: '/admin/quiz/list',
    name: 'quiz list',
    component: ListQuizView
  },
  {
    path: '/admin/quiz/update',
    name: 'quiz update',
    component: UpdateQuizView
  },
  {
    path: '/admin/user/list',
    name: 'user list',
    component: ListUserView
  },
  {
    path: '/admin/user/update',
    name: 'user update',
    component: UpdateUserView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
