/**
 *  006.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com

 *  @date     31/07/20
 *  @brief    "Sum square difference"
 *  
 *  		The sum of the squares of the first ten natural numbers is: 1² + 2² + ... + 10² = 385
 *  		The square of the sum of the first ten natural numbers is: (1 + 2 + ... + 10)² = 55² = 3025
 *  		Hence the difference between the sum of the squares of the first
 *  		ten natural numbers and the square of the sum is: 3025 - 385 = 2640
 *  
 *  		Find the difference between the sum of the squares of the first
 *  		one hundred natural numbers and the square of the sum.
 */
 
// We need to compute two things.
// 1) Square of the sums. Will be computed with sum of A.P. terms formula.
// Pay attention that the last term is equal to the number of terms and
// The ratio is equal 1. So, we can simplify the equation to this:
let max = 100;
squareOfSums = Math.pow((max * (max + 1)) / 2, 2);

// 2) Sum of the squares.
sumOfSquares = max * (max + 1) * (2 * max + 1) / 6;
console.log( squareOfSums - sumOfSquares );
