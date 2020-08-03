/**
 *  009.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     02/08/20
 *  
 *  @brief    "Special Pythagorean triplet"
 *  
 *  		A Pythagorean triplet is a set of three natural
 *  		numbers, a < b < c, for which,
 *  		a2 + b2 = c2
 *  
 *  		For example, 32 + 42 = 9 + 16 = 25 = 52.
 *  		There exists exactly one Pythagorean triplet for which
 *  		a + b + c = 1000.
 *  		Find the product abc.
 */
 
// In Mathematics, there is a way to find those Pythagorean Triplets.
// Given {a, b, c} | a² + b² = c²
// Choose 2 numbers, {x, y}
// a = x² - y²
// b = 2xy
// c = x² + y²
// Since we want the product of abc for an set {a, b, c} that sums 1000, we can sum the equations above:
// a + b + c = 1000
// (x² - y²) + 2xy + (x² + y²) = 1000 
// 2x² + 2xy = 1000
// x² + xy = 500
// Solving by quadratic formula we have:
// ( -y ± √(y² - 4 * 1 * - 500) ) / 2
// ( -y ± √(y² + 2000) ) / 2 
// We are searching for positive numbers, so we don't need the minus from ±
// ( -y + √(y² + 2000) ) / 2
// Now, we can choose an y such that root will be an integer.


// 1000 is a BIG number to run. We are searching for a little one...
// PS: We need to search while y <= x. If y > x, 'a' will be negative.
for( let y = 0; y < 1000; y++ ) {
	// Or n % 1
	if( Number.isInteger(Math.sqrt(y * y + 2000)) ) {
		// We found y. Let's calculate x.
		let x = (-y + Math.sqrt(y * y + 2000)) / 2;
		// With both {x, y}, find {a, b, c} and multiply them.
		// With algebra, we can find that the product will be:
		// a * b * c => 
		// (x² + y²) * (x² - y²) * 2xy => 
		// 2(x⁵y - xy⁵)
		console.log( 2*((x*x*x*x*x*y)-(y*y*y*y*y*x)) );
		break;
	}
}