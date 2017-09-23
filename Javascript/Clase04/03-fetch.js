(function(d){

    d.addEventListener("DOMContentLoaded", ()=>{
        const tbody = d.querySelector("tbody")
        const inputNombre = d.querySelector("#txtNombre")
        const inputApellido = d.querySelector("#txtApellido")
        const inputEdad = d.querySelector("#txtEdad")
        const botonGrabar = d.querySelector("#btnGrabar")

        const apiRestBase = "http://javascript.tibajodemanda.com"
        const apiRestListar = `${apiRestBase}/listar`
        const apiRestInsertar = `${apiRestBase}/insertar`
        const apiRestEliminar = `${apiRestBase}/eliminar`
        const apiRestActualizar = `${apiRestBase}/actualizar`

        let registros

        let idRegistroSeleccionado

        const ajax = (metodo, apiRest, datos) => {
            const opciones = {method:metodo}

            if(metodo!="get" && datos) {
                opciones.body = datos
            }

            return fetch(apiRest, opciones).then(respuesta => respuesta.json())
        }

        const listar = () => {
            ajax("get", apiRestListar)
                .then( respuesta =>{
                    const registros = JSON.parse(respuesta)
                    const filas = registros.map( (item, indice) => {
                        return `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.nombre}</td>
                                <td>${item.apellido}</td>
                                <td>${item.edad}</td>
                                <td>
                                    <a href="#" class="btn btn-warning btnActualizar" data-indice="${indice}">Actualizar</a><a href="#" class="btn btn-danger btnEliminar" data-id="${item.id}">Eliminar</a>
                                </td>
                            </tr>
                        `
                    })
                    .join("")

                    tbody.innerHTML = filas

                    const botonesActualizar = d.querySelectorAll(".btnActualizar")
                    const botonesEliminar = d.querySelectorAll(".btnEliminar")

                    botonesEliminar.forEach(boton => {
                        boton.addEventListener("click", function(e){
                            e.preventDefault()

                            const id = this.getAttribute("data-id")

                            eliminar(id, listar)
                        })
                    })

                    botonesActualizar.forEach(boton => {
                        boton.addEventListener("click", function(e){
                            e.preventDefault()

                            const indice = this.dataset.indice

                            inputNombre.value = registros[indice].nombre
                            inputApellido.value = registros[indice].apellido
                            inputEdad.value = registros[indice].edad

                            idRegistroSeleccionado = registros[indice].id


                        })
                    })
                })
                .catch(()=>{
                    console.log("Promesa no cumplida")
                })
        }

        const insertar = () => {
            const nombre = inputNombre.value
            const apellido = inputApellido.value
            const edad = inputEdad.value

            const fd = new FormData()
            fd.append("nombre", nombre)
            fd.append("apellido", apellido)
            fd.append("edad", edad)

            ajax("post", apiRestInsertar, fd)
                .then(()=>{
                    inputNombre.value = ""
                    inputApellido.value = ""
                    inputEdad.value = ""
                    listar()
                })
                .cath(()=>{
                    console.log("Promesa no cumplida")
                })
        }

        const actualizar = () => {
            const nombre = inputNombre.value
            const apellido = inputApellido.value
            const edad = inputEdad.value

            const fd = new FormData()
            fd.append("nombre", nombre)
            fd.append("apellido", apellido)
            fd.append("edad", edad)

            ajax("post",`${apiRestActualizar}/${idRegistroSeleccionado}`, fd)
                .then(()=>{
                    inputNombre.value = ""
                    inputApellido.value = ""
                    inputEdad.value = ""
                    idRegistroSeleccionado = undefined
                    listar()
                })
                .catch(()=>{
                    console.log("Promesa no cumplida")
                })
        }
        const eliminar = (id, cb) => {

            if(confirm("¿Estás seguro de querer eliminar?")){
                ajax("post",`${apiRestEliminar}/${id}`)
                    .then(()=>{
                        listar()
                    })
                    .catch(()=>{
                        console.log("Promesa no cumplida")
                    })
            }
        }


        botonGrabar.addEventListener("click", e => {
            e.preventDefault()

            if(idRegistroSeleccionado) {
                actualizar()
            } else {
                insertar()
            }
        })

        listar()
    })

})(document)