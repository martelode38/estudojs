// // revisão sobre  objeto
//
// //coleção dinamica de pares chaves/valor
//
// const produto = new Object
// produto.nome = 'cadeira'
// produto['marca do produto'] = 'generica'
// produto.preco = 220
//
// console.log(produto)
//
// delete produto.preco
// // para remover algo do produto
//
// const carro = {
//     modelo: 'gol 2010',
//     cor: 'preto',
//     proprietario: {
//         nome: 'marcos', idade: 53
//     }, valor: 22000,
//
//     calcularValorDoSeguro: function(a,b){
//       return  a + b
//     }
// }
// console.log(carro)
//
// carro.proprietario.endereco = 'numero'
//
//
// console.log(carro)


//formas de criar obj
// função construtor
const obj1 = {

}
obj2 = new Object

//funçoes construtoras

// function produto(nome, preco, desc){
// this.nome = nome
// this.getprecoComDesconto = () => {
//     return preco * (1 - desc)
// }
// }
//
// const p1 = new produto('caneca', 15, 0.25)
//
// console.log(p1.getprecoComDesconto())


//function factory

function criarfuncionario(nome,salariobase,faltas){
    return{
        nome, salariobase,faltas, getsalario(){
            return (salariobase/30) * (30 - faltas)
        }

    }
}
const f1 =criarfuncionario('maria', 1400, 4)
console.log(f1.getsalario())