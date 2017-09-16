const personas = ["Zulema", "Cinthya", "Gloria", "Alejandro", "Kike"]

const nombres = personas.map((elemento, indice) => {
	return elemento.toUpperCase()
})

console.log(nombres)

const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: "Clarisa", cApellidoPaternoPaciente: "        Barco    ", edad: 15},
	{id: 2, nHistoria: 2010, cNombrePaciente: "Maritza", cApellidoPaternoPaciente: "Hidalgo   ", edad:8},
	{id: 3, nHistoria: 2011, cNombrePaciente: "Carmen", cApellidoPaternoPaciente: "   Villanueva", edad:39},
	{id: 4, nHistoria: 2013, cNombrePaciente: "Delia   ", cApellidoPaternoPaciente: "Tazza   ", edad:89},
	{id: 5, nHistoria: 2014, cNombrePaciente: "Mario", cApellidoPaternoPaciente: "Alcazaba", edad:20}
]

const nombreCompleto = (nombre, apellido) => {
	return `${nombre.trim().toUpperCase()} ${apellido.trim()}`
}

const filas = historias.map(historia => {
	return `
		<tr>
			<td>${historia.id}</td>
			<td>${historia.nHistoria}</td>
			<td>
				${nombreCompleto(historia.cNombrePaciente, historia.cApellidoPaternoPaciente)}</td>
			<td>${historia.edad}</td>
		</tr>
	`
})

console.log(filas)