// https://www.codewars.com/kata/5ebd53ea50d0680031190b96

// Complete the function to convert an integer into a string of the Turkish name.

//     input will always be an integer 0-99;
//     output should always be lower case.

const getTurkishNumber = (num) => {
    let nums = {
        0: 'sıfır',
        1: 'bir',
        2: 'iki',
        3: 'üç',
        4: 'dört',
        5: 'beş',
        6: 'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz',
        10: 'on',
        20: 'yirmi',
        30: 'otuz',
        40: 'kırk',
        50: 'elli',
        60: 'altmış',
        70: 'yetmiş',
        80: 'seksen',
        90: 'doksan',
    }

    if (num in nums) return nums[num];
    else {
        return nums[num.toString().split('')[0] + '0'] + ' ' + nums[num.toString().split('')[1]]
    }
}