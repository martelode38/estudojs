// const valor = "global"
// function minhaFunc(){
//     console.log(valor)
// }
//
// function exec(){
//     const valor = 'local'
//     minhaFunc()
// }
// exec()


//CLOSURE
// é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular varevareis externas à função


const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const minhafunc = fora()
console.log(minhafunc())
