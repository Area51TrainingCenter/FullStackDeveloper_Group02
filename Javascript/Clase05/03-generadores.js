function* generador(){
    console.log("Generador ejecutado")
    yield "Pausa 1"
    console.log("Luego de la pausa 1")
    yield "Pausa 2"
    console.log("Luego de la pausa 2")
}

const generate = generador()
generate.next()
generate.next()
generate.next()