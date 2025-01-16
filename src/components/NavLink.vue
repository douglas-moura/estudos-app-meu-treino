<template>
	<span class="flex items-center justify-center text-center">
		<RouterLink :to="link || '/'" class="flex flex-col items-center m-auto">
			<Icon :class="'text-xl transition-all ' + (url.path === link ? 'text-orange-500' : 'text-neutral-600')" :icon="'tabler:' + icon + (url.path === link ? '-filled' : '')" />
			<p :class="'text-xs mt-1 ' + (url.path === link ? 'text-orange-500' : 'text-neutral-600')">{{ text || 'Erro' }}</p>
		</RouterLink>
	</span>
</template>

<script setup lang="ts">
	import { RouterLink, useRoute } from 'vue-router'
	
	//data
	const url: object = useRoute()
	
	//props
	defineProps<{
		icon?: string;
		text?: string;
		link?: string;
	}>()
</script>

<style scoped lang=""></style>