<template>
	<div :class="`grid grid-cols-5 gap-2 p-3 rounded-lg w-full relative ${props.next ? 'border-orange-500 border-2' : 'border-neutral-200 border'}`">
		<span class="h-full bg-neutral-200 rounded aspect-square">
			<Icon class="text-4xl m-auto" :icon="'tabler:square-rounded-letter-' + props.letra" />
		</span>
		<span class="flex-col justify-center col-span-4">
			<h6 v-if="props.data" class="text-orange-500 text-[10px]">{{ props.data }} - {{ props.hora }}</h6>
			<p class="truncate">
				<strong>Treino:</strong>
				<br v-if="url.path == '/meu-treino'" />
				{{ props.treino }}
			</p>
			<p v-if="props.stats" class="">{{ props.stats }}</p>
		</span>
		<span v-if="props.next" class="h-6 items-center justify-center absolute -top-2 right-4 bg-orange-500 px-2 rounded">
			<p class="text-[10px] text-neutral-100">Próximo treino</p>
		</span>
	</div>
</template>

<script setup lang="ts">
	import { RouterLink, useRoute } from 'vue-router'
	
	//data
	const url: object = useRoute()
	
	//props
	const props = defineProps<{
		letra: string;
		treino: string;
		stats?: string;
		data?: string;
		hora?: string;
		next?: boolean;
	}>()
</script>

<style scoped=""></style>