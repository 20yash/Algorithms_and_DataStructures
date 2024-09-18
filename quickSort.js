function QuickSort(arrayHere){
    if(arrayHere<2){
        return arrayHere
    }
    let pivot = arrayHere[arrayHere.length-1]
    let right=[]
    let left=[]
    for(i=0;i<arrayHere.length-1;i++){
        if(arrayHere[i]<pivot){
            left.push(arrayHere[i])
        }
        else{
            right.push(arrayHere[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}

const arr=[1,100,2,33,43,17,19,190]
console.log(QuickSort(arr));