// https://www.codewars.com/kata/55a75e2d0803fea18f00009d

function slope(points){
	let x = (points[2] - points[0]);
	let y = (points[3] - points[1]);
	let res = y / x;
	if( x === 0) {
		return 'undefined' ;
	}
	return res + '';
}