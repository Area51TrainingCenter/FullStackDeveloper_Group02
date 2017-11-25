import { EventEmitter } from 'events'

export class Reloj extends EventEmitter {
	obtenerHora() {
		const fecha = new Date()
		
		const horas = fecha.getHours() < 10 ? `0${fecha.getHours()}` : fecha.getHours() 
		const minutos = fecha.getMinutes() < 10 ? `0${fecha.getMinutes()}` : fecha.getMinutes() 
		const segundos = fecha.getSeconds() < 10 ? `0${fecha.getSeconds()}` : fecha.getSeconds() 

		return `${horas}:${minutos}:${segundos}`
	}

	iniciar(){
		setInterval(()=>{
			this.emit("mostrar hora", this.obtenerHora())
		}, 1000)
	}
}
