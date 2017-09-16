(function(d, w){
	var nombre = "Sergio"
	d.body.style.backgroundColor = "red"
	w.setTimeout(()=>{
		console.log("Se ejecutó el timer")
	}, 2000)
	console.log("Función autoejecutada")
})(document, window)