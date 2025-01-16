<template>
	<section>
		<div class="container">
			<h2>Meu Treino</h2>
			<BoxTreino
				letra="a"
				treino="Bíceps, tríceps e abdômen"
			/>
			<BoxTreino
				letra="b"
				treino="Costas, bíceps e lombar"
				next=true
			/>
			<BoxTreino
				letra="c"
				treino="Pernas e abdômen"
			/>
			<button class="btn btn-secundario mt-8">Solicitar novo treino</button>
		</div>
	</section>
	<section class="bg-orange-500">
		<div class="container">
			<h3 class="container-titulo">Histórico</h3>
			<VCalendar
				:attributes="attrs"
				:initial-page="{ month: 12, year: 2024 }"
				:color="selectedColor"
				expanded
			/>
			<table id="tab-historico">
				<tbody>
					<tr>
						<td>
							<span>
								<Icon class="tab-icon" icon="tabler:barbell" />
								Sessões
							</span>
						</td>
						<td>0 de 18</td>
					</tr>
					<tr>
						<td>
							<span>
								<Icon class="tab-icon" icon="tabler:calendar-check" />
								Treinos no ano
							</span>
						</td>
						<td>0</td>
					</tr>
					<tr>
						<td>
							<span>
								<Icon class="tab-icon" icon="tabler:users-group" />
								Aulas em grupo
							</span>
						</td>
						<td>0</td>
					</tr>
					<tr>
						<td>
							<span>
								<Icon class="tab-icon" icon="tabler:treadmill" />
								Cardios
							</span>
						</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<section>
		<div class="container">
			<h3 class="container-titulo">Detalhes</h3>
			<p><strong>Objetivo:</strong> Hipertrofia</p>
			<p><strong>Frequência:</strong> 3x/semana</p>
			<p><strong>Restrições:</strong> Não consta</p>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import BoxTreino from '../components/BoxTreino.vue'
	
	const selectedColor = ref('orange')
	const attrs = ref([
		{
			highlight: true,
			popover: {
				label: 'Treino A',
				visibility: 'click',
				hideIndicator: true,
			},
			dates: new Date(),
		},
	])
</script>

<style scoped>
	#tab-historico {
		@apply mt-4
	}
	
	#tab-historico tbody tr {
		@apply h-12 border-b border-orange-700 last:border-0
	}
	
	#tab-historico tbody tr td {
		@apply text-sm first:font-semibold last:text-right last:text-neutral-100
	}
	
	#tab-historico tbody tr td span {
		@apply text-sm items-center
	}
	
	.tab-icon {
		@apply mr-2 text-xl
	}
</style>