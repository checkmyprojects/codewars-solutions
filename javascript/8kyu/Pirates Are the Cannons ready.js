// https://www.codewars.com/kata/5748a883eb737cab000022a6

const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
            return "Shiver me timbers!"
        }
    }
    return "Fire!"
}