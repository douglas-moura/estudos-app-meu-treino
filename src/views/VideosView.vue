<template>
	<section class="bg-neutral-100">
		<div class="container">
			<h2>Transforme seu treino em diversão!</h2>
			<p>Explore uma seleção de vídeos de Zumba, FitDance, alongamento, e aeróbicos para todos os níveis.</p>
		</div>
	</section>
	<section>
		<div class="container">
			<h3 class="container-titulo">Fit Dance</h3>
			<BoxVideo />
			<BoxVideo />
			<BoxVideo />
			<span class="text-orange-500 justify-end">
				<a>Ver mais</a>
				<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
			</span>
		</div>
		<div class="container">
			<h3 class="container-titulo">Zumba</h3>
			<BoxVideo />
			<BoxVideo />
			<BoxVideo />
			<span class="text-orange-500 justify-end">
				<a>Ver mais</a>
				<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
			</span>
		</div>
		<div class="container">
			<h3 class="container-titulo">Alongamento</h3>
			<BoxVideo />
			<BoxVideo />
			<BoxVideo />
			<span class="text-orange-500 justify-end">
				<a>Ver mais</a>
				<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
			</span>
		</div>
		<div class="container">
			<h3 class="container-titulo">Mobilidade</h3>
			<BoxVideo />
			<BoxVideo />
			<BoxVideo />
			<span class="text-orange-500 justify-end">
				<a>Ver mais</a>
				<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
			</span>
		</div>
	</section>
</template>

<script setup lang="ts">
	import BoxVideo from '../components/BoxVideo.vue'
</script>

<style scoped>
	.container {
		@apply border-b border-neutral-200 last:border-b-0
	}
</style>