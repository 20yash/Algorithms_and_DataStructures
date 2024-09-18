function bubbleSort(arrayHere){
    let swapped
    let temp
    do{
        swapped=false
        for(i=0;i<arrayHere.length-1;i++){
            if(arrayHere[i]>arrayHere[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped = true
            }

        }
    }
    while(swapped)
}

arr=[22,33,44,66,5,4344,64,2]
bubbleSort(arr)
console.log(arr);