// https://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr){
    return `It's a ${Array.isArray(arr) ? arr.indexOf(5) != -1 && arr.indexOf(13) != -1 ? 'black' : 'white' : 'fake'} array`;
}