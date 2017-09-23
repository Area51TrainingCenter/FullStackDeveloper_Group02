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

        const ajax = (metodo, apiRest, cb, datos) => {
            const obj = new XMLHttpRequest()
            obj.onreadystatechange = function() {
                if(this.readyState === 4 && this.status === 200) {
                    if(cb){
                        cb(this.responseText)
                    }
                }
            }

            obj.open(metodo, apiRest, true)

            if(metodo!="get" && datos) {
                obj.send(datos)
            } else {
                obj.send()
            }
        }

        const listar = () => {
            ajax("get", apiRestListar, function(respuesta){
                registros = JSON.parse(respuesta)
                // console.table(JSON.parse(this.responseText))

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
                        // const id = this.dataset.id

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
            /*const obj = new XMLHttpRequest()
            obj.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){
                    
                }
            }
            obj.open("get", apiRestListar, true)
            obj.send()*/
        }

        const insertar = () => {
            const nombre = inputNombre.value
            const apellido = inputApellido.value
            const edad = inputEdad.value

            const fd = new FormData()
            fd.append("nombre", nombre)
            fd.append("apellido", apellido)
            fd.append("edad", edad)

            ajax("post", apiRestInsertar, function(){
                    inputNombre.value = ""
                    inputApellido.value = ""
                    inputEdad.value = ""
                    listar()
            }, fd)

           /* const obj = new XMLHttpRequest()
            obj.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){

                }
            }

            obj.open("post", apiRestInsertar, true)
            obj.send(fd)*/
        }

        const actualizar = () => {
            const nombre = inputNombre.value
            const apellido = inputApellido.value
            const edad = inputEdad.value

            const fd = new FormData()
            fd.append("nombre", nombre)
            fd.append("apellido", apellido)
            fd.append("edad", edad)

            ajax("post", `${apiRestActualizar}/${idRegistroSeleccionado}`, function(){
                    inputNombre.value = ""
                    inputApellido.value = ""
                    inputEdad.value = ""
                    idRegistroSeleccionado = undefined
                    listar()
            }, fd)

           /* const obj = new XMLHttpRequest()
            obj.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){

                }
            }

            obj.open("post", apiRestInsertar, true)
            obj.send(fd)*/
        }
        const eliminar = (id, cb) => {

            if(confirm("¿Estás seguro de querer eliminar?")){
                ajax("post", `${apiRestEliminar}/${id}`, function(){
                    listar()
                })
            }


            /*const obj = new XMLHttpRequest()
            obj.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){
                    cb()
                }
            }

            obj.open("post", `${apiRestEliminar}/${id}`, true)
            obj.send()*/
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