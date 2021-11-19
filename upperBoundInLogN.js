function findUpperBound(arr,l,r,greaterEle,key){
	
	while (l <= r) {
	 
		var mid = l + Math.floor((r - l)/2);

		if (arr[mid] > key) {
			greaterEle = mid;
			r = mid - 1;
		}
		else
			l = mid + 1;
	}
	return (greaterEle);
}

var n = 5;
var key = 0;
var arr = [2,-2,0,3,5];
arr.sort(function(a,b){return a-b});
 var result = findUpperBound(arr,0,n-1,n,key)
 console.log(result);
