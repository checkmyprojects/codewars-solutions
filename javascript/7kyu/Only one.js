// https://www.codewars.com/kata/5734c38da41454b7f700106e

// Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False
// Input 	Expected Output
// No flags passed in 	False
// True, False, False 	True
// True, False, False, True 	False
// False, False, False, False 	False

const onlyOne = (...args) => args.filter(Boolean).length === 1