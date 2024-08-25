// https://www.codewars.com/kata/5859c82bd41fc6207900007a

// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'

// For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

// 'Grae said: "Practice makes perfect"'

function quotable(name, quote){
    return `${name} said: "${quote}"`
}