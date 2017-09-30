const ajax = tiempo => {
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, tiempo)
    })

    return promesa
}


function* generador(){
    ajax(3000)
        .then(()=>{
            console.log("promesa 1")
            g.next()
        })
    yield
    ajax(6000)
        .then(()=>{
            console.log("promesa 2")
            g.next()
        })
    yield
    ajax(4000)
        .then(()=>{
            console.log("promesa 3")
            g.next()
        })

}

const g = generador()
g.next()