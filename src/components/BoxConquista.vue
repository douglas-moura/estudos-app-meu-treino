<template>
	<span class="flex-col items-center justify-items-start text-center w-32 min-w-32 mr-4 last:mr-0">
		<span class="border-2 border-orange-400 rounded-full p-4 mb-6 relative">
			<Icon class="text-3xl text-white absolute -bottom-3 left-0 rounded-full" icon="tabler:award-filled" />
			<Icon class="text-5xl text-orange-500" :icon="'tabler:' + props.simbolo" />
		</span>
		<p class="font-semibold leading-4 mb-2 w-full text-neutral-100">{{ props.titulo }}</p>
		<p class="text-[10px] leading-3 text-neutral-400">{{ props.descr }}</p>
	</span>
</template>

<script setup lang="ts">
	//props
	const props = defineProps<{
		simbolo: string;
		titulo: string;
		descr: string;
	}>()
</script>

<style scoped></style>