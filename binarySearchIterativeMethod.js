function binarySearch(arr,n,key){
    var l = 0;
    var h = n-1;
    while(l <= h){
        var mid = l+Math.floor((h-l)/2);
        if(arr[mid] === key)
        return 1;
        else if(arr[mid] < key){
            l = mid+1;
        }
        else
        {
            h = mid-1;
        }
        
    }
    return -1;
}
   var n = 5;
   var key = 0;
   var arr = [2,-2,0,3,5];
   arr.sort(function(a,b){return a-b});
    var result = binarySearch(arr,n,key);
    console.log(result);
