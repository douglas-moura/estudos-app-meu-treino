<template>
	<nav class="fixed z-50 bottom-0 h-16 bg-neutral-50 border-t border-neutral-200">
		<div class="container grid-cols-5 py-0 my-auto">
			<NavLink link="/" icon="home" text="Home" />
			<NavLink link="/meu-treino" icon="barbell" text="Treino" />
			<!-- <NavLink link="/dieta" icon="apple" text="Nutri" /> -->
			<NavLink link="/videos" icon="player-play" text="Vídeos" />
			<NavLink link="/perfil" icon="user" text="Conta" />
			<NavLink link="/login" icon="user" text="Login" />
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { RouterLink } from 'vue-router'
	import NavLink from '../NavLink.vue'
</script>

<style scoped></style>