/**
 *  Project Euler 003
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  @date     30/07/20
 *  
 *  @brief    
 *  		"Largest prime factor"
			Problem 3

			The prime factors of 13195 are 5, 7, 13 and 29.
			What is the largest prime factor of the number 600851475143 ?
 */
 
function LargestPrimeFactor( x ) {
  let n = 2;
  while( n <= Math.sqrt(x) ) {
   	x % n == 0 ? x /= n : n++;
  }
  return x;
}
console.log( LargestPrimeFactor( 600851475143 ) );