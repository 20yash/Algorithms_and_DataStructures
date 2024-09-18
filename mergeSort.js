function mergeSort(arrayHere){
    if(arrayHere.length<2){
        return arrayHere
    }
    const mid= Math.floor(arrayHere.length/2)
    const left=arrayHere.slice(0,mid)
    const right=arrayHere.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const temp=[]

    while(left.length && right.length){
        if(left[0]<=right[0]){
            temp.push(left.shift())
        }
        else{
            temp.push(right.shift())
        }
    }
    return [...temp,...left,...right]
}

console.log(mergeSort([33,22,54,66,23,1,42]));