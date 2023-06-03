// https://www.codewars.com/kata/5b609ebc8f47bd595e000627

function solution([m1,m2,d],[um1,um2,ud]) {
    const G = 6.67e-11 ;
    const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
                       , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
                       } ;
    return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;
  }