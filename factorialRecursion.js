function factorialRecursion(numberHere){
    if(numberHere==0){
        return 1
    }
    return ((numberHere)*factorialRecursion(numberHere-1))
}

console.log(factorialRecursion(4));