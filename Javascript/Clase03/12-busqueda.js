const inputBusqueda = document.querySelector("#txtBusqueda")

const historias = [
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

inputBusqueda.addEventListener("keyup", function(e){
	const textoABuscar = this.value
	const filtrado = historias.filter(historia => {
		return (historia.cNombrePaciente.toLowerCase().indexOf(textoABuscar.toLowerCase())>=0) || (historia.cApellidoPaternoPaciente.toLowerCase().indexOf(textoABuscar.toLowerCase())>=0) 
	})
	console.log(filtrado)
})
