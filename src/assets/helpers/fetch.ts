import type { User } from './interfaces'

export const usuario = async (info: string, value: number | string): Promise<User | null> => {
	try {
		const response = await fetch(`http://localhost:3000/usuarios?${info}=${value}`)
		const data: User[] = await response.json()
		return data.length > 0 ? data[0] : null
	} catch (e) {
		console.error(e)
		return null
	}
}

export const usuarios = async (): Promise<User[] | null> => {
	try {
		const response = await fetch(`http://localhost:3000/usuarios`)
		const data: User[] = await response.json()
		return data.length > 0 ? data : null
	} catch (e) {
		console.error(e)
		return null
	}
}