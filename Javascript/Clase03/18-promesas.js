const promesa = new Promise((resolve, reject) => {
	setTimeout(()=>{
		const registros = [
			{id:1, nombre: "Carmen"},
			{id:2, nombre: "Alejandro"}
		]
		resolve(registros)
		/*reject({
			numError: 501,
			mensaje: "Error del servidor"
		})*/
	}, 4000)
})

promesa
	.then((reg)=>{
		console.log(reg)
		console.log("Promesa cumplida")

		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve()
			},2000)
		})
	})
	.then(()=>{
		console.log("Segunda promesa cumplida")
	})
	.catch((error)=>{
		console.log(error)
		console.log("Promesa rechazada")
	})