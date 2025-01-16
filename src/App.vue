<template>
    <header>
        <MenuNavegacao v-if="url.path !== '/login'" />
    </header>
	<main>
		<RouterView />
	</main>
	<footer class="pb-12">
		<AppRodape />
	</footer>
</template>

<script setup lang="ts">
	import { RouterView, useRoute } from 'vue-router'
	import MenuNavegacao from './components/layouts/MenuNavegacao.vue'
	import AppRodape from './components/layouts/AppRodape.vue'
	
	//data
	const url: object = useRoute()
</script>

<style scoped></style>
