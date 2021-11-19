var cnt = 0;

function binarySearch(arr,n,key){
    var l = 0;
    var h = n-1;
    while(l <= h){
        var mid = l+Math.floor((h-l)/2);
        if(arr[mid] === key)
         {
             cnt++;
             doCount(arr,l,h,mid,key,n);
             return cnt;
         }
        else if(arr[mid] < key){
            l = mid+1;
        }
        else
        {
            h = mid-1;
        }
        
    }
    
}

function doCount(arr,l,h,mid,key,n){
    var left = mid-1;
     while (left >= 0 && arr[left] === key){
         cnt++, 
         left--;
     }
        
    var right = mid + 1;
    while (right !=n && arr[right] === key){
        cnt++, 
        right++;
    }
        
}

var n = 6;
var key = 3;
var arr = [2,3,3,3,6,9];
arr.sort(function(a,b){return a-b});
 var result = binarySearch(arr,n,key);
 console.log(result);
