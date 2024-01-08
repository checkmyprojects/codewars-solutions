// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

function generateShape(int){  
    var ans='';
    for (var i=0; i<int; ++i)
    {
      for (var j=0; j<int; ++j)
        ans+='+';
      if (i!=int-1)
        ans+='\n';
    }
    return ans;
  }