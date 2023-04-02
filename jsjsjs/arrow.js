/*
// arrow
// sempre anonima, pra chamar tem que associar a uma variavel


dobro2 = a => 2 * a //reduzida, se tiver apenas um parametro

dobro = (a) => {return 2 * a}
console.log(dobro(Math.PI))


//this dentro da arrow

function pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new pessoa


 */
/*
//função arrow

let comparaComThis = function (param){
    console.log(this === param)
}
const obj = {}

comparaComThis(obj)


 */

