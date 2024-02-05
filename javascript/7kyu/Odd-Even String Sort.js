// https://www.codewars.com/kata/580755730b5a77650500010c

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

function sortMyString(S) {
    let strEven = ''
    let strOdd = ''
    for (let i = 0; i < S.length; i++) {
      if (i % 2 === 0) {
        strEven += S[i]
      }
      else {
        strOdd += S[i]
      }
    }
    return strEven + ' ' + strOdd
  }