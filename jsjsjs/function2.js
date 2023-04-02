//funções anonimas
//importante

const soma = function (x, y){
 return x + y
}

const printResult = function (a,b,operacao = soma){
 console.log(operacao(a, b))
}
printResult(56, 67)

printResult(24,45, function(x,y){
 return x-y
}) // voce pode passar uma função anonima/arrow no parametro



