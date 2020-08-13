/**
 *  028.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     13/08/20
 *  
 *  @brief    "Number spiral diagonals"
 *  
 *  Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 
 *  [21] 22  23  24 [25]
 *   20  [7]  8  [9] 10
 *   19   6  [1]  2  11
 *   18  [5]  4  [3] 12
 *  [17] 16  15  14 [13]
 *  
 *  It can be verified that the sum of the numbers on the diagonals is 101.
 *  What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */
 
 /* I think there is two different ways to do it. 
 1) Brute-force like method.
 We start a loop at 1 and create a variable 'sum', adds all (2n+1) numbers with loop variable 'n'. Everytime the loop reaches a perfect square of an odd number (2n+1)², we starts adding (2n+3), (2n+5), (2n+x), and so on. Until  (2n+x) */

let sum = 1;
let t 	= 1;
let v 	= 2;
for( let w = 0; ((w/2)>>0)+1 < 1001; w++) {
	t += v;
	sum += t;
	if( (w > 0) && (((w+1) % 4) == 0) ) {
		v += 2;
	};
}
console.log( sum );
// Performance: 1ms

/* 2) Using Algebra, to make the loop run faster.

I will not explain all logic behind these equations. Try to figure out this:
Assuming n the length of the square will be (2n+1).
Every new side of spiral we will add 4 numbers:

1) (2n+1)²  		// up-right edge: perfect square of odd numbers
2) (2n+1)² - 2n 	// up-left edge
3) (2n+1)² - 4n		// bottom-left edge
4) (2n+1)² - 6n		// bottom-right edge

summing all we have:
4(2n+1)²-12n => 4(4n²+4n+1)-12n => 16n² + 4n + 4

Remember: you need to add the central 'one'. */

let s = 1;
for( let w = 1; w < ((1001/2)>>0)+1 ; w++ ) {
	s += 16 * w**2 + 4 * w + 4;
}
console.log( s );
// Performance: 0ms