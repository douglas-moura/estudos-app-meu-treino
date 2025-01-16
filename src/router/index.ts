import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/perfil',
			name: 'perfil',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/PerfilView.vue'),
		},
		{
			path: '/meu-treino',
			name: 'meu-treino',
			component: () => import('../views/TreinoView.vue'),
		},
		{
			path: '/videos',
			name: 'videos',
			component: () => import('../views/VideosView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
		},
	],
})

export default router