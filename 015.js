/**
 *  015.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     05/08/20
 *  
 *  @brief    "Lattice paths"
 *  		Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *  		[image]
 *  		How many such routes are there through a 20×20 grid?
 */


// NOTE: From this problem, I'll start making functions to make the work easier.	
// Let's define how calculate a binomial number.

function factorial( n ) {
	if( n == 1 ) return 1;
	return n * factorial( n - 1 );
};

function binomial( n, k ) {
	// Numerator
	let num = 1;
	for( let w = n - k + 1; w <= n; w++ ) {
		num *= w;
	};
	return num / factorial( k );
};

// The number of Lattice paths from (0,0) to (20,20) will be:
// 	( 40 ) 	==> 	    40!
//	(    )	==>		----------
//	( 20 )	==>		 20!(20)!
// Which is equal to:

console.log( binomial(40, 20) );