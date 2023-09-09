// https://www.codewars.com/kata/57037ed25a7263ac35000c80

function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}