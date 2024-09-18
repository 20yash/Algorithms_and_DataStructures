function linearSearch(arr,target){
    for(i=0;i<arr.length-1;i++){
        if(arr[i]===target){
            return i
        }
    }
    return `not found`

}

console.log(linearSearch([1,33,4,4,2,2,33,4,3,],33));