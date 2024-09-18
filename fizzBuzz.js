function fizzBuzz(numberHere){

    for(i=1;i<=numberHere;i++){
    if(numberHere%3==0 && numberHere%5==0){
        return `FizzzzzBuzzzz`
    }
    else if(numberHere%3==0){
        return `Fizzzz`
    }
    else if(numberHere%5==0){
        return `Buzzzzzz`
    }
    else{
        return numberHere
    }
}
}
console.log(fizzBuzz(15));