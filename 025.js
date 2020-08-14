/**
 *  025.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     14/08/20
 *  
 *  @brief    "1000-digit Fibonacci number"
 *  The Fibonacci sequence is defined by the recurrence relation:
 *  
 *  Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
 *  Hence the first 12 terms will be:
 *  
 *   F1 = 1
 *   F2 = 1
 *   F3 = 2
 *   F4 = 3
 *   F5 = 5
 *   F6 = 8
 *   F7 = 13
 *   F8 = 21
 *   F9 = 34
 *   F10 = 55
 *   F11 = 89
 *   F12 = 144
 *  
 *  The 12th term, F12, is the first term to contain three digits.
 *  What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

function fibonacci() {
	let a = [0n, 1n];	
	for(w=2;;w++) {
		a.push( a[a.length-1] + a[a.length-2] );
		if( (a[a.length-1]+'').length == 1000 ) {
			return w; 
		}
	}
}

console.log( fibonacci() );
// Performance: 202ms