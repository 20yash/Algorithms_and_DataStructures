function fibo(NumberHere){
    let arrayHere=[0,1]
    for(i=2;i<NumberHere;i++){
        arrayHere[i]=arrayHere[i-1]+arrayHere[i-2]
    }
    return arrayHere
}

console.log(fibo(5));