// https://www.codewars.com/kata/5819a6fdc929bae4f5000a33

// We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

// But if we don’t know the case our inputs are in, these are not very helpful.
// Task:

// So the task here is to implement a function that takes a string and returns a string with the case the input is in. The possible case types are "kebab", "camel", and "snake". If none of the cases match with the input, or if there are no separators / case changes in the input, return "none". Inputs will only have letters (no numbers or special characters).
// Some definitions

// Kebab case: lowercase-words-separated-by-hyphens

// Camel case: lowercaseFirstWordFollowedByCapitalizedWords

// Snake case: lowercase_words_separated_by_underscores
// Examples:

// "hello-world" => "kebab"
// "hello-to-the-world" => "kebab"
// "helloWorld" => "camel"
// "helloToTheWorld" => "camel"
// "hello_world" => "snake"
// "hello_to_the_world" => "snake"
// "hello__world" => "none"
// "hello_World" => "none"
// "helloworld" => "none"
// "hello-World" => "none"

function id(str) {
	var camel = /^[a-z]+([A-Z][a-z]+)+$/,
			kebab = /^[a-z]+(-[a-z]+)+$/,
            snake = /^[a-z]+(_[a-z]+)+$/;
  
  if (camel.test(str))
  	return 'camel';
  else if (kebab.test(str))
  	return 'kebab';
  else if (snake.test(str))
  	return 'snake';
  else
    return 'none';
}