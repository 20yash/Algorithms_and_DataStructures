function powerOfTwo(numberHere){
    if(numberHere<2){
        return false
    }
    while(numberHere>1){
        if(numberHere%2!=0){
            return `not a power of 2`
        }
        numberHere=numberHere/2
    }
    return `this is the power of 2`
}
console.log(powerOfTwo(14));