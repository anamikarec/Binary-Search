function findLowerBound(arr,l,r,k){
	
	while (l <= r) {
	 
		var mid = l + Math.floor((r - l)/2);
		
		if(arr[mid]===k)
		    return mid;

		if (arr[mid] < k) {
			l = mid + 1;
		}
		else
		    r = mid - 1;
	}
	return -1;
}

   var n = 5;
   var key = 2;
   var arr = [1,1,2,2,5]
   var res = findLowerBound(arr,0,n-1,key);
//   console.log(res);
   let num = res;
//   console.log("num",num);
   for(let i=res-1;i>=0;i--){
       if(arr[res]!== arr[i]){
           break;
       }
       num--;
   }
   console.log(num);
