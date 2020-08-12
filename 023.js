/**
 *  023.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     12/08/20
 *  
 *  @brief    "Non-abundant sums"
 *  A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *  A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 *  As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 *  Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 *
 */
 
let table = [];
// https://mathworld.wolfram.com/AbundantNumber.html
// "Every number greater than 20161 can be expressed as a sum of two abundant numbers."
let limit = 20161;
let integers = [...Array(limit).keys()];

// Calculating the sum of the divisors.
for( let w = 0; w < limit; w++ ) {
	let sum = MathPrimes.sigmaSum( w );
	if( sum > w ) table.push(w);
};

// Let's add the numbers, two by two:
for( let x = 0; x < table.length; x++ ) {
	for( let y = 0; y < table.length; y++ ) {
		let sum = table[x] + table[y];
		integers[sum] = undefined;
	}
}

// And finally get the answer:
let sum = 0;
for( let w=0; w < integers.length; w++ ) {
	if( integers[w] ) sum += Number(integers[w]);
}

console.log( sum );
// Performance: 269ms