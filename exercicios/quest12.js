function fat(n){

    if(n === 0){
        return 1
    }else {
        let i = 0
        for (i = 0; i <= n; i--) {
            i *= (i - 1)
        }
        return i

    }
}

console.log(fat(2))