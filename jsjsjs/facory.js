//function factory
// FUNC que retorna um objeto
//
// function factory(){
//     return {
//         nome:'ana',
//         idade:'maria'
//     }
// }
//
// function criarProduto(nome, preco){
//     return {
//         nome,
//         preco
//     }
//
// }
// console.log(criarProduto('carro', 18))
// console.log(criarProduto('celular', 18))
//
//

// comparando factory com classe
//
// class pessoa{
//     constructor(nome){
//         this.nome = nome
//     }
//     falar(){
//         console.log(`meu nome e ${this.nome} `)
//     }
//
// }
//
// const p1 = new pessoa('jaum')
// p1.falar()


//IIFE EXPRESSAO DE FUNÇAO IMEDIATAMENTE INVOCADA

//FUNÇÃO AUTOINVOCADA

(function () {
    console.log('sera executada na hora')
    console.log('fogedo escopo mais abrangente')
})() //EXECUTA IMEDIATAMENTE

/// CALL & APPLY

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 * imposto)}`
}
const produto= {
    nome: ' lixo',
    preco: '12'
    getPreco


}
glo