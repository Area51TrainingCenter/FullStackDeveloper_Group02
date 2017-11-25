import { setImmediate } from 'timers';
console.log("Inicio del proceso principal")

setTimeout(()=>{
	console.log("setTimeout ejecutado")
})

setImmediate(()=>{
	console.log("setImmediate ejecutado")
})

process.nextTick(()=>{
	console.log("nextTick ejecutado")
})


console.log("Fin del proceso principal")
console.log(__dirname)
console.log(__filename)

