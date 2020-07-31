/**
 *  Project Euler 004
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     30/07/20
 *  @brief    "Largest palindrome product"
 *  		Problem 4
 *  		A palindromic number reads the same both ways.
 *  		The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *  		Find the largest palindrome made from the product of two 3-digit numbers.

 */

x = 999;
y = 999;
palindrome = [];

while ( x > 99 ) {
	if( isPalindrome( x * y ) ) palindrome.push(x * y);
	y--;
	if( y < 100 ) {
		y = 999;
		x--;
	}
}

function isPalindrome (n) {
	n = n+'';
	return 	n.charAt(0) === n.charAt(5) && 
			n.charAt(1) === n.charAt(4) && 
			n.charAt(2) === n.charAt(3);
};

console.log( Math.max(...palindrome) );