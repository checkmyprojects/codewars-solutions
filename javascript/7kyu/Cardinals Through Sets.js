// https://www.codewars.com/kata/6a520b948dc07d11d0342a58

// Little context

// In a mathematical framework called Zermelo-Fraenkel set theory (ZFC, for short), every piece of mathematics is defined through sets. The most simple item to define this way are non-negative integers. This is the task for this kata.
// Task

// Given a non-negative integer n, return its ZFC definition as a string (see formatting below).
// Definition and Output Formatting

//     The term "cardinality" means the size of the set.

// In set theory, non-negative integers are also called cardinal numbers. Any cardinal number nnn can be represented as a set, containing all cardinal numbers less than nnn and having a cardinality of nnn. The most simple case is 000: which set has the cardinality of 000? An empty set. So, by ZFC definition, 0→{}0 \rightarrow \{\}0→{}. Then comes 111. It can be defined as {0}\{0\}{0} but we already know that 0→{}0 \rightarrow \{\}0→{}, so technically, 1→{{}}1 \rightarrow \{\{\}\}1→{{}}. And the same process continues for next cardinal numbers:

// 0→{}0 \rightarrow \{\}0→{}

// 1→{{}}1 \rightarrow \{\{\}\}1→{{}}

// 2→{{},{{}}}2 \rightarrow \{\{\}, \{\{\}\}\}2→{{},{{}}}

// 3→{{},{{}},{{},{{}}}}3 \rightarrow \{\{\}, \{\{\}\}, \{\{\}, \{\{\}\}\}\}3→{{},{{}},{{},{{}}}}

// \vdots⋮

// For the output formatting, each of the curly brackets {}\{\}{} must be in a string. There must be no spaces in the string, and the numbers represented in the set must be in ascending order. Examples of formatting below:

// 0  ->  "{}"
// 1  ->  "{{}}"
// 2  ->  "{{},{{}}}"
// 3  ->  "{{},{{}},{{},{{}}}}"
// ...

// Input constraints

// 0≤n≤250 \le n \le 250≤n≤25
// Notes for potential translators

// In case, you're looking forward to translate the kata to BF or NASM, please refer to this version of the task, with different description, input constraints and output requirements. Cheers to JohanWiltink for creating it and being an active participant in the beta status development of this kata.

function zfcDefinition(n) {
    const ordinals = ["{}"];
  
    for (let value = 1; value <= n; value++) {
      ordinals[value] = `{${ordinals.slice(0, value).join(",")}}`;
    }
  
    return ordinals[n];
  }