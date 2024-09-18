function BinarySearchRecursion(arr,target){
    return SearchRecursion(arr,target,0,(arr.length)-1)
}

function SearchRecursion(arr,target,leftIndex,RightIndex){
    if(leftIndex>RightIndex){
        return `not found in the array`
    }

    let middleIndex= Math.floor((leftIndex+RightIndex)/2)
    if(target==arr[middleIndex]){
        return middleIndex
    }
    if(target>arr[middleIndex]){
        return SearchRecursion(arr,target,leftIndex+1,RightIndex)
    }
    else{
        return SearchRecursion(arr,target,leftIndex,RightIndex-1)
    }
}

console.log(BinarySearchRecursion([11,22,33,44,55],44));