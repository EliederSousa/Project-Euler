/**
 *  010.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     02/08/20
 *  
 *  @brief    "Summation of primes"
 *  
 *  		The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *  		Find the sum of all the primes below two million.
 */


// WARNING: Slow to run! Javascript is not the best language to do it.
let maxNum = 2000000;
// We don't need 2 because we only search for odd numbers.
let primes = [3,5];

for( let w = 7; w <= maxNum; w += 2 ) {		
	// Check if last digit is 5.
	if (w % 5 == 0) {
		continue;
	} else {
		if( !primes.find( prime => w % prime == 0) ) {
			primes.push(w);
		}
	}		
}
// Add 2 in the beggining of array.
primes.unshift(2);

console.log( primes.reduce( (a,b) => a + b ) );