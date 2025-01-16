<template>
	<section id="home-head" class="bg-orange-500">
		<div class="container text-neutral-100">
			<span class="flex-col mb-8">
				<h2>Bem vindo, {{ 'Usuário' }}</h2>
				<h5 class="font-medium"><strong>ID.:</strong> 220497 - Plano G</h5>
				<h5 class="font-medium"><strong>Progresso:</strong> 11 de 17</h5>
			</span>
			<span class="justify-between p-4 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-600 from-15% to-15% items-center">
				<p class="text-neutral-100">Acessar treino</p>
				<Icon class="text-lg" icon="tabler:arrow-right" />
			</span>
		</div>
	</section>
	<section id="ultimos-treinos">
		<div class="container">
			<h3 class="container-titulo">Últimos Treinos</h3>
			<BoxTreino
				letra="a"
				treino="Bíceps, tríceps e abdômen"
				stats="Concluído"
				data="22/04/24"
				hora="20h33"
			/>
			<BoxTreino
				letra="c"
				treino="Pernas e abdômen"
				stats="Concluído"
				data="18/04/24"
				hora="18h03"
			/>
		</div>
	</section>
	<section id="home-conquistas" class="bg-neutral-800">
		<div class="container w-full">
			<span class="container py-0">
				<h3 class="container-titulo text-neutral-100">Suas Conquistas</h3>
				<h6 class="text-neutral-400">Veja aqui as conquistas que você desbloqueou recentemente</h6>
			</span>
			<div id="home-conquistas-slide" class="flex py-4 px-8 overflow-x-scroll">
				<BoxConquista
					simbolo="trophy"
					titulo="Foco Total"
					descr="Você bateu sua meta de treinos semanais"
				/>
				<BoxConquista
					simbolo="calendar-check"
					titulo="Novos Hábitos"
					descr="2 meses seguidos treinando"
				/>
				<BoxConquista
					simbolo="building"
					titulo="Viajante"
					descr="Você visitou 3 unidades diferentes"
				/>
				<BoxConquista
					simbolo="run"
					titulo="Corredor"
					descr="Você fez mais de 10hrs de cardio em esteira"
				/>
			</div>
			<span class="container py-0">
				<a class="flex w-full items-center justify-end mt-4">
					Ver todas
					<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
				</a>
			</span>
		</div>
	</section>
	<section id="home-beneficios">
		<div class="container">
			<h3 class="container-titulo">Seus Benefícios - <strong>Plano G</strong></h3>
			<h6>Confora aqui os benefícios e serviços presentes no seu plano atual.</h6>
			<ul>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-orange-500 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:building" />
					</span>
					<h6>Treine em qualquer unidade</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-orange-500 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:stethoscope" />
					</span>
					<h6>2x consulta com nutricionista por mês</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-orange-500 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:physotherapist" />
					</span>
					<h6>1x consulta com fisioterapeuta por mês</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-purple-700 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:brand-deezer" />
					</span>
					<h6>Desconto de 25% plano Deezer</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-green-400 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:brand-whatsapp" />
					</span>
					<h6>Atendimento exclusivo via WhatsApp</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-orange-500 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:user-star" />
					</span>
					<h6>Personal Trainer</h6>
				</li>
				<li class="flex items-center mb-2 last:mb-0">
					<span class="bg-pink-500 flex w-8 aspect-square rounded mr-2">
						<Icon class="m-auto text-xl text-neutral-100" icon="tabler:heartbeat" />
					</span>
					<h6>Acompanhamento de resultados e medidas</h6>
				</li>
			</ul>
			<a class="flex w-full items-center justify-end mt-4">
				Ver mais
				<Icon class="text-lg ml-2" icon="tabler:arrow-right" />
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
	import BoxTreino from '../components/BoxTreino.vue'
	import BoxConquista from '../components/BoxConquista.vue'
</script>

<style scoped>
	#home-conquistas-slide::-webkit-scrollbar {
    	display: none;
	}
</style>