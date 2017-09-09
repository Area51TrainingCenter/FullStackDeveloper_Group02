const dias = document.querySelector(".dias")
const horas = document.querySelector(".horas")
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")

const fechaTiempoNavidad = new Date("2017-12-25 00:00:00")
const tiempoNavidad = fechaTiempoNavidad.getTime()

const mostrarTiempoParaNavidad = () => {
	const fechaTiempo = new Date()
	const tiempoTranscurrido = fechaTiempo.getTime()

	const tiempoFaltante = tiempoNavidad - tiempoTranscurrido

	let diasFaltantes = Math.floor(tiempoFaltante/ (24*60*60*1000))
	const diasFaltantesMs = diasFaltantes*24*60*60*1000

	let horasFaltantes = Math.floor((tiempoFaltante - diasFaltantesMs) / (60*60*1000))
	const horasFaltantesMs = horasFaltantes*60*60*1000

	let minutosFaltantes = Math.floor((tiempoFaltante - diasFaltantesMs - horasFaltantesMs)/(60*1000))
	const minutosFaltantesMs = minutosFaltantes*60*1000

	let segundosFaltantes = Math.floor((tiempoFaltante - diasFaltantesMs - horasFaltantesMs - minutosFaltantesMs) / 1000)

	diasFaltantes = diasFaltantes > 9 ? diasFaltantes : `0${diasFaltantes}`
	horasFaltantes = horasFaltantes > 9 ? horasFaltantes : `0${horasFaltantes}`
	minutosFaltantes = minutosFaltantes > 9 ? minutosFaltantes : `0${minutosFaltantes}`
	segundosFaltantes = segundosFaltantes > 9 ? segundosFaltantes : `0${segundosFaltantes}`

	dias.innerHTML = diasFaltantes
	horas.innerHTML = horasFaltantes
	minutos.innerHTML = minutosFaltantes
	segundos.innerHTML = segundosFaltantes

}

setInterval(()=>{
	mostrarTiempoParaNavidad()
})

mostrarTiempoParaNavidad()