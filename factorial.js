function factorialOfANumber(numberHere){
    var result = 1
    for(i=2;i<=numberHere;i++){
        result=result*i
        
    }
    return result
}

console.log(factorialOfANumber(5));