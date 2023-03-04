// Expected Behaviour

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return { 'status': msg  }
  }