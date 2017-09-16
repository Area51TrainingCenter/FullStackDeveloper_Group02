const tbody = document.querySelector("tbody")
const paginador = document.querySelector("#paginador")
const botonesOrden = document.querySelectorAll(".boton-orden")

let historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: "Clarisa", cApellidoPaternoPaciente: "        Barco    ", edad: 15},
	{id: 2, nHistoria: 2010, cNombrePaciente: "Maritza", cApellidoPaternoPaciente: "Hidalgo   ", edad:8},
	{id: 3, nHistoria: 2011, cNombrePaciente: "Carmen", cApellidoPaternoPaciente: "   Villanueva", edad:39},
	{id: 4, nHistoria: 2013, cNombrePaciente: "Delia   ", cApellidoPaternoPaciente: "Tazza   ", edad:89},
	{id: 5, nHistoria: 2014, cNombrePaciente: "Mario", cApellidoPaternoPaciente: "Alcazaba", edad:20},
	{id: 6, nHistoria: 2015, cNombrePaciente: "Clarisa2", cApellidoPaternoPaciente: "        Barco2    ", edad: 15},
	{id: 7, nHistoria: 2016, cNombrePaciente: "Maritza2", cApellidoPaternoPaciente: "Hidalgo2   ", edad:8},
	{id: 8, nHistoria: 2017, cNombrePaciente: "Carmen2", cApellidoPaternoPaciente: "   Villanueva2", edad:39},
	{id: 9, nHistoria: 2018, cNombrePaciente: "Delia2   ", cApellidoPaternoPaciente: "Tazza2   ", edad:89},
	{id: 10, nHistoria: 2019, cNombrePaciente: "Mario2", cApellidoPaternoPaciente: "Alcazaba2", edad:20}
]

let pagina = 1
const tamanoPagina = 4
const totalPaginas = Math.ceil(historias.length / tamanoPagina)

const mostrarPaginador = totalPaginas => {
	for(let pag = 0; pag < totalPaginas; pag++) {
		const botonPagina = `
			<a href="#" data-pagina="${pag+1}" class="btn btn-info boton-pagina">${pag+1}</a>
		`
		paginador.innerHTML += botonPagina
	}

	const botonesPaginas = document.querySelectorAll(".boton-pagina")
	botonesPaginas.forEach(boton => {
		boton.addEventListener("click", function(e){
			e.preventDefault()
			const numPagina = parseInt(this.dataset.pagina)
			mostrarData(historias, numPagina)
		})
	})
	
}

const mostrarData = (arr, pagina=1) => {
	let filas = arr
					.map(registro => {
						const reg = registro
						reg.cNombrePaciente = reg.cNombrePaciente.trim()
						reg.cApellidoPaternoPaciente = reg.cApellidoPaternoPaciente.trim()

						return reg
					})
					.map(registro => {
						const reg = registro
						reg.cNombrePaciente = reg.cNombrePaciente.toUpperCase()

						return reg
					})
					.slice((pagina-1)*tamanoPagina, (pagina-1)*tamanoPagina + tamanoPagina )
					.map(registro => {
						return `
							<tr>
								<td>${registro.id}</td>
								<td>${registro.cNombrePaciente}</td>
								<td>${registro.cApellidoPaternoPaciente}</td>
							</tr>
						`
					})
					.join("")

	tbody.innerHTML = filas
}

const ordenar = function(e) {
	e.preventDefault()
	const campo = this.dataset.campo
	const ordenado = historias.sort((a,b) => {
		return a[campo]>b[campo]
	})

	historias = ordenado

	mostrarData(historias)
}

botonesOrden.forEach(boton => {
	boton.addEventListener("click", ordenar)
})

mostrarData(historias)
mostrarPaginador(totalPaginas)