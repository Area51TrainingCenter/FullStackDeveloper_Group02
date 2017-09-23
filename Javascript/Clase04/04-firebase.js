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

        const inputCorreo = d.querySelector("#txtCorreo")
        const inputContrasena = d.querySelector("#txtContrasena")
        const botonLogin = d.querySelector("#btnLogin")
        const botonRegistro = d.querySelector("#btnRegistro")

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


    })

})(document, firebase)