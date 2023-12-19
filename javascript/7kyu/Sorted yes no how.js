// https://www.codewars.com/kata/580a4734d6df748060000045

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    var ans;
	if (array[1] > array[0]){
		ans = "yes, ascending";
	}

	if (ans==="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]>= array[i-1]){
				ans = "yes, ascending";
			} else return ans = "no";
		}
	}
	if (ans!=="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]<= array[i-1]){
				ans = "yes, descending";
			} else return ans = "no";
		}		
	}
	return ans;
}