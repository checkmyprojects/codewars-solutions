// https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929

// The function maintains a flag, initially set to 1, and iterates through the given string, performing the following steps for each character:

//     If the character is an alphabet letter ([a-zA-Z]):
//         If the flag is 1, convert it to uppercase.
//         If the flag is 0, convert it to lowercase.
//         Toggle the flag after processing the character.
//     If the character is not an alphabet letter, leave it unchanged and reset the flag to 1.

// The function returns the modified string after processing all characters.

function uglifyWord(s) {
    var ans='';
    var b=true;
    for (var i=0; i<s.length; ++i)
    {
       if (b)
        ans+=s[i].toUpperCase();
      else
        ans+=s[i].toLowerCase();
      if (s[i].toLowerCase()>='a' && s[i].toLowerCase()<='z')
        b=!b;
      else
        b=true;  
    }
    return ans;
}