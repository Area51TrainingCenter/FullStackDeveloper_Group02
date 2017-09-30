const promesa01 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve()
    }, 3000)
})

const promesa02 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve()
    }, 4000)
})

console.log(new Date())

Promise.all([promesa01, promesa02])
    .then(()=> {
        console.log("Todas las promesas cumplidas")
        console.log(new Date())
    })

