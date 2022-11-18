// Your task is to find the first element of an array that is not consecutive.

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

class FirstNonConsecutive {
    static Integer find(final int[] array) {
        for(int i = 0; i < array.length-1; i++){
          int curr = array[i];
          int next = array[i+1];
          if(curr!=next-1){
            return next;
          }
        }
      return null;
    }
}