// valor padrao do es2015

// function soma3( a =1, b =1, c =1){
//     return a+b+c
// }

//this pode variar
/*
referenciar o obj atual da execução
ex: uma classe alunos e os obj sao nomes e notas, vc executa isso com this

no arrow  a função this não varia


*/
/*
this e bind



const pessoa = {
    saudacao : 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
///codigo errado

pessoa.falar()
const falar = pessoa.falar
falar()

//// não vai executar por que ha confiltos entre paradigmas


o certo abaixo
bind



pessoa.falar()
const falarDePessoa = pessoa.falar.bind(pessoa)

//usando a função bind o this sempre apontara para pessoa

*/
//this pode variar part 2
/* dessa forma não  funcionara e apresentara NaN na tela
function pessoa()
{
    this.idade = 0 //fazendo assim, a variavel fica a disposição a ser usada por uma função


    setInterval(function (){
        this.idade++
        console.log(this.idade)

    },1000) //  essa função dispara outra função a partir do intervalo que voce passou no parametro (o intervalo é em mili segundo)

}
new pessoa
*/
/*
function pessoa() {
    this.idade = 0 //fazendo assim, a variavel fica a disposição a ser usada por uma função

    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)

    }//.bind(this)//, 1000) //  essa função dispara outra função a partir do intervalo que voce passou no parametro (o intervalo é em mili segundo)
}

//usou apenas o this no gind pq estamos executando dentro da função pessoa
new pessoa

*/