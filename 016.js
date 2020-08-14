/* 
 *  016.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *   
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     14/08/20
 *  
 *  @brief    "Power digit sum"
 *  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *  What is the sum of the digits of the number 2^1000?
 *
 */

// Using BigInt it's so easy.
console.log((2n ** 1000n + '').split("").reduce( (a,b) => +a + +b));