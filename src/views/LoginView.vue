<template>
	<section class="my-auto">
		<div class="container bg-white rounded-lg p-8">
			<h2 class="mb-12">Login</h2>
			<form class="">
				<span class="input-campo">
					<label>CPF</label>
					<input id="user-cpf" type="text" class="input-form w-full" placeholder="000.000.000-00">
				</span>
				<span class="input-campo">
					<label>Senha</label>
					<input id="user-senha" type="password" class="input-form w-full" placeholder="******">
					<a class="mt-2">
						<h6>Esqueceu sua senha?</h6>
					</a>
				</span>
				<span class="input-campo mt-12">
					<button class="btn btn-primario w-full" @click="authUser">Entrar</button>
				</span>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useRouter } from 'vue-router'
	import { usuario } from '../assets/helpers/fetch'
	import { User } from '../assets/helpers/interfaces'
	
	//data
	const router: object = useRouter()
	
	//methods
	const login = (): void => {
		router.push("/")
	}
	
	async function authUser(e: Event): Promise<void> {
		e.preventDefault()
		
		const formCPF = (document.getElementById('user-cpf').value) as HTMLInputElement
		const formSenha = (document.getElementById('user-senha').value) as HTMLInputElement
		
		const user: User = await usuario('cpf', formCPF)
		
		if (user && user.senha == formSenha) {
			login()
		} else {
			alert('Erro Infos')
		}
	}
	
</script>

<style scoped></style>