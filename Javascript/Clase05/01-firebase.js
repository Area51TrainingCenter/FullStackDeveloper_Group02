(function(d, f){

    d.addEventListener("DOMContentLoaded", () => {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyB9fbFw-9hZRVFgBsA9CViWZqcAkd3jXtk",
            authDomain: "inventarios-99217.firebaseapp.com",
            databaseURL: "https://inventarios-99217.firebaseio.com",
            projectId: "inventarios-99217",
            storageBucket: "inventarios-99217.appspot.com",
            messagingSenderId: "1054048093965"
        };
        f.initializeApp(config);

        const refProductos = f.database().ref("/productos")

        const inputCorreo = d.querySelector("#txtCorreo")
        const inputContrasena = d.querySelector("#txtContrasena")
        const inputProducto = d.querySelector("#txtProducto")
        const botonLogin = d.querySelector("#btnLogin")
        const botonRegistro = d.querySelector("#btnRegistro")
        const botonDesloguear = d.querySelector("#btnDesloguear")
        const botonIngreso = d.querySelector("#btnIngreso")
        const zonaRegistroLogin = d.querySelector("#zonaRegistroLogin")
        const zonaProductos = d.querySelector("#zonaProductos")
        const tbody = d.querySelector("tbody")

        let idSeleccionado


        botonRegistro.addEventListener("click", e => {
            e.preventDefault()

            const correo = inputCorreo.value
            const contrasena = inputContrasena.value

            f.auth().createUserWithEmailAndPassword(correo, contrasena)
                .then(()=>{
                    console.log("Usuario registrado")
                })
                .catch(error => {
                    console.log(error)
                })


        })

        botonLogin.addEventListener("click", e => {
            e.preventDefault()

            const correo = inputCorreo.value
            const contrasena = inputContrasena.value

            f.auth().signInWithEmailAndPassword(correo, contrasena)
                .then(()=>{
                    console.log("logueado")
                })
                .catch(error => {
                    console.log(error)
                })
        })

        botonDesloguear.addEventListener("click", e => {
            e.preventDefault()

            f.auth().signOut()
        })

        botonIngreso.addEventListener("click", e => {
            e.preventDefault()

            const nombre = inputProducto.value

            if(idSeleccionado){
                refProductos
                    .child(idSeleccionado)
                    .update({nombre: nombre})
                    .then(()=>{
                        idSeleccionado = undefined
                        inputProducto.value = ""
                    })
            } else {
                refProductos
                    .push()
                    .set({nombre: nombre})
                    .then(()=>{
                        inputProducto.value = ""
                    })
            }


        })

        f.auth().onAuthStateChanged((usuario)=>{
            if(usuario){
                zonaRegistroLogin.style.display = "none"
                zonaProductos.style.display = "block"
            } else {
                zonaRegistroLogin.style.display = "block"
                zonaProductos.style.display = "none"
            }
        })

        refProductos.on("value", productos => {
            const lista = productos.val()
            let filas = ""

            for(let identificador in lista){
                let item = lista[identificador]

                filas += `
                    <tr>
                        <td>${identificador}</td>
                        <td>${item.nombre}</td>
                        <td>
                            <a href="#" class="btn btn-success btnModificar" data-registro='${JSON.stringify(item)}' data-id="${identificador}">Modificar</a>
                            <a href="#" class="btn btn-danger btnEliminar" data-id="${identificador}">Eliminar</a>
                        </td>
                    </tr>
                `
            }

            tbody.innerHTML = filas

            const botonesEliminar = d.querySelectorAll(".btnEliminar")
            botonesEliminar.forEach(boton=>{
                boton.addEventListener("click", function(e) {
                    e.preventDefault()

                    if(confirm("¿Está seguro de eliminar?")){
                        const id = this.getAttribute("data-id")
                        refProductos.child(id).remove()
                    }

                })
            })

            const botonesModificar = d.querySelectorAll(".btnModificar")
            botonesModificar.forEach(boton => {
                boton.addEventListener("click", function(e){
                    e.preventDefault()

                    const registroSeleccionado = JSON.parse(this.dataset.registro)

                    idSeleccionado = this.dataset.id

                    inputProducto.value = registroSeleccionado.nombre
                })
            })
        })


    })

})(document, firebase)