function bicesto(ano){
    if(ano %100 == 0){
        return false
    }else if(ano %4 == 0 || ano %400 == 0){
        return true
    }else{ return false}
}
console.log(bicesto(100))

