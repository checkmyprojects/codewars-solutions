// https://www.codewars.com/kata/56f3f6a82010832b02000f38

function describeAge(a) {
    return"You're a(n) "+(a<13?"kid":a<18?"teenager":a<65?"adult":"elderly");
}