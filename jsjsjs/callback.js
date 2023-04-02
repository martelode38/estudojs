//callback (chamar de volta) FUNÇÃO DENTRO DO PARAMETRO DE OUTRA FUNÇÃO
/*
const fabricantes = ['mercedes', 'audi', 'bmw'
]
function print(nome, indice){
console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach((print)) //foreach é uma função de array, ele passa como parametro nome do elementoe  como segundo parametro o indice

fabricantes.forEach(fabricante => console.log(fabricante))

//ela é chamada de volta (callback) para cada elemento do array


 */
//callback part 2
/*
const notas =[6,4,6,7,8,5,4,6,7,7,86,4,4]

//sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }

}
console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)



 */

//Callback dentro do browser é muito utilizado
// ex

document.getElementsByTagName('bory')[0].onclick = function(e){
    console.log('o evento ocorreu!')
} // quando colocado no browser, ele ativa essa callback e toda vida que vc clicar printara a frase na tela