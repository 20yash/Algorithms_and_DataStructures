function PrimeNumber(numberHere){
    if(numberHere<2){
        return `0 or Negative integer`
    }
    for(i=2;i<numberHere;i++){
        if(numberHere%i==0){
            return `not a prime number`
        }
        return `this is a prime number`
    }
}
console.log(PrimeNumber(14));