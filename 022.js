/**
 *  022.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     12/08/20
 *  
 *  @brief    "Names scores"
 *  Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 *  For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
 *  What is the total of all the name scores in the file?
 */
 
 
// Fortunately, Javascript has a method to sorts an array into alphabetical order. It couldn't be easier.
// names = ["MARY","PATRICIA","LINDA","BARBARA",....]
names = names.sort();

function nameScore( name ) {
	let score = 0;
	for( let w = 0; w < name.length; w++ ) {
		// Since all names are in uppercase, we take the char code of that letter, and subtracts 64 ( "A" char code )
		score += name.charCodeAt(w) - 64;
	}
	return score;
}

let result = 0;
for( let w = 0; w < names.length; w++ ) {
	// Remember that the [0] in array is the 1st name. We need to add 1 to w.
	result += nameScore( names[w] ) * (w+1);
};

console.log( result );