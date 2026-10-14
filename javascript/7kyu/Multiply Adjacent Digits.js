function digitMultiplication(str) {
  let sumTotal = 0
  let product = 1
  for (let i = 0; i < str.length; i++) {
    //if current element is a number multiply it into the existing product
    if (str[i] == +str[i]) {
      product *= +str[i]
    } else 
    //if you see a minus sign, we're gonna subract the next set of numbers we see, so add current growing product to sumTotal, then reset product & set it to negative so the next total is subtracted even when using a '+'
    if (str[i] == "-"){
      sumTotal += product 
      product = -1
    } else 
    //if you see a plus sign, combine the current sumTotal with the growing product, then reset the product, keeping it positive
    if (str[i] == "+") {
      sumTotal += product 
      product = 1
    }
  }
  return sumTotal + product
}