function RecursionFibonacci(numberHere){
    if(numberHere<2){
        return numberHere
    }
    return (RecursionFibonacci(numberHere-1)+RecursionFibonacci(numberHere-2))
    
}

console.log(RecursionFibonacci(8))
console.log(RecursionFibonacci(6))
console.log(RecursionFibonacci(7))