const usuario = {
    nombre: "Sergio",
    edad: 15,
    correo:""
}


usuario.nombre = usuario.nombre.toUpperCase()

const usuarioProxy = new Proxy(usuario, {
    get(target, propiedad){
        const edad = target["edad"]

        if(edad>=18) {
            return `Hola señor ${target[propiedad]}`
        } else {
            return `Hola ${target[propiedad]}`
        }


        //return target[propiedad].toLowerCase()
    },

    set(target, propiedad, valor){
        console.log(typeof(valor))
        if(typeof(valor)==="string") {
            if(propiedad==="correo"){
                const correoValido = valor.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)

                if(correoValido) {
                    target[propiedad] = valor
                } else {
                    throw new Error("No es un correo válido")
                }
            }
            target[propiedad] = valor.toUpperCase()
        } else if(typeof(valor)==="number"){
            if(valor>20){
                throw new Error("Edad no permitida")
            }
        }
        
    }
})

usuarioProxy.nombre = "Javier"
usuarioProxy.edad = 15
usuarioProxy.correo = "sergiohidalgo@gmail.com"

usuario.correo = "hidalgo"
console.log(usuarioProxy.correo)

