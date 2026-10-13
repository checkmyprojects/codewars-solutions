// https://www.codewars.com/kata/5803753aab6c2099e600000e

// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthdate is given in the following order: year, month, day. You can assume it is in the past.

// For example if today is 30 November 2015 then

// 2015, 11, 1 => "You are 29 days old"

const ageInDays = (year, month, day) =>
  `You are ${
  Math.floor(
    Math.abs(
      new Date().getTime() - new Date(year, --month, day).getTime()
    ) / (1000 * 3600 * 24)
  )
  } days old`;