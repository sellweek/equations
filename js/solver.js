"use strict"

function solve(a, b, c) {
	var d = b*b - 4*a*c;
	console.log("D = "+d)
	var x1 = ((-b) + Math.sqrt(d))/(2*a);
	var x2 = ((-b) - Math.sqrt(d))/(2*a);
	return [x1, x2]
}