const segundero = document.querySelector(".segundero")
const minutero = document.querySelector(".minutero")
const horario = document.querySelector(".horario")

const despSegundero = 6
const despMinutero = 2 // .1
const despHorario = 1 // 0.00833333333

let anguloSegundero = -90
let anguloMinutero = -90
let anguloHorario = -90

const mover = ()=>{
	anguloSegundero += despSegundero
	anguloMinutero += despMinutero
	anguloHorario += despHorario

	segundero.style.transform = `rotate(${anguloSegundero}deg)`
	minutero.style.transform = `rotate(${anguloMinutero}deg)`
	horario.style.transform = `rotate(${anguloHorario}deg)`
}

setInterval(function(){
	mover()
}, 1000)

mover()