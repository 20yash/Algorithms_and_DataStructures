function binarySearch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)

        if(arr[middle] === target){
            return middle
        }
        if(arr[middle]>target){
            right=middle-1

        }
        else{
            left= middle+1
        }
    }
    return -1
}

console.log(binarySearch([1,2,44,55,66,77],66));