/**
 *  022.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license.
 *  
 *  @date     12/08/20
 *  
 *  @brief    "Amicable numbers"
 *  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 *  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *  Evaluate the sum of all the amicable numbers under 10000
 */

// We need a previously created prime number array.
// When I'm working on a problem, I load "util/primes.js" file to avoid creating the same function over and over. 
// _primes = [2,3,5, .... ];

// This is a well known function, called sigma function.
// https://en.wikipedia.org/wiki/Divisor_function
// https://oeis.org/A000203
function sigmaSum( n ) {
	let originalN = n;
	let t = 0;
	let divisors = [];
	let count = 0;
	let sum = 1;
	let total = 1;
	while( n > 1 ) {		
		if( n % _primes[t] == 0) {
			count++;
			sum += Math.pow(_primes[t], count);
			n /= _primes[t];
		} else {
			total *= sum;
			sum = 1;
			t++;
			count = 0;
		};
	};
	total *= sum;
	return total - originalN;
};

let friends = [];
for( let w = 2; w < 10000; w++ ) {
	let a = MathPrimes.sigmaSum(w);
	// Remember to avoid numbers with same sum as itself.
	if( MathPrimes.sigmaSum(a) == w && (a != w) ) friends.push(w);
}

console.log( friends.reduce( (a,b) => a + b) );