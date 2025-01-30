// https://www.codewars.com/kata/56a921fa8c5167d8e7000053

// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

//     There needs to be at least 1 uppercase letter.
//     There needs to be at least 1 lowercase letter.
//     There needs to be at least 1 number.
//     The password needs to be at least 8 characters long.

// You are permitted to use any methods to validate the password.

function password(str) {
    return str.length >= 8 &&
           /[a-z]/.test(str) &&
           /[A-Z]/.test(str) &&
           /\d/.test(str);
}