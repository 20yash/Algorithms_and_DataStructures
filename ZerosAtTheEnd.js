function zeroAtTheEnd(arr){
    let temp=0

    for(i=0;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[temp],arr[i]]=[arr[i],arr[temp]]
                temp++;
        }
    }
    return arr
}

console.log(zeroAtTheEnd([1,20,8,0,9,6,5,0]));