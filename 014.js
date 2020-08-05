/**
 *  014.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     05/08/20
 *  
 *  @brief    "Longest Collatz sequence"
 *  		The following iterative sequence is defined for the set of positive integers:
 *  		
 *  		n → n/2 (n is even)
 *  		n → 3n + 1 (n is odd)
 *  
 *  		Using the rule above and starting with 13, we generate the following sequence:
 *  		
 *  		13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *  		It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * 			Which starting number, under one million, produces the longest chain?
 *  		NOTE: Once the chain starts the terms are allowed to go above one million.
 */

// This script can be more fast using a lookup table to store all previously generated sequences. I don't made a table; I'm using brute-force method here.
// This will be our result.
let maxChain = {
	chain: [],
	n: 0,
	size: 0
};

for( let w = 5; w < 1000000; w++ ) {
	// collatz( w );
	let num = w;
	let c = [num];		
	while( num > 1 ) {
		num % 2 == 0 ? num = num / 2 : num = 3*num + 1;
		c.push( num );
	}; 
	// end collatz routine
	if( c.length > maxChain.size ) {
		maxChain.size 	= c.length;
		maxChain.chain 	= c;
		maxChain.n		= w;
	};
}

console.log( maxChain );