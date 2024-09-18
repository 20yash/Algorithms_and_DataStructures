function reverseString(stringHere){

    let reversedString=" "
    for(let i=stringHere.length-1;i>=0;i--){
        reversedString=reversedString+stringHere[i]
    }
    return reversedString
}

console.log(reverseString("Yash"));