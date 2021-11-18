function binarySearch(arr,l,h,key){
    while(l <= h){
        var mid = l+Math.floor((h-l)/2);
        if(arr[mid] === key)
        return 1;
        else if(arr[mid] < key){
            return binarySearch(arr, mid+1, h, key);
        }
        else
        {
            return binarySearch(arr, l, mid-1, key);
        }
        
    }
    return -1;
}
var n = 5;
var key = 0;
var arr = [2,-2,0,3,5];
arr.sort(function(a,b){return a-b});
 var result = binarySearch(arr,0,n-1,key);
 console.log(result);
