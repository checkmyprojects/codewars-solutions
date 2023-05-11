// https://www.codewars.com/kata/56a4addbfd4a55694100001f

function validateHello(greetings) {
    res =  /(hello)|(ciao)|(salut)|(hallo)|(hola)|(ahoj)|(czesc)/i.test(greetings) 
    return res
  }