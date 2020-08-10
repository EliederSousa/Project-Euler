/**
 *  017.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license.
 *  
 *  @date     10/08/20
 *  
 *  @brief    "Number letter counts"
 *  		If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *  		If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *  		NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 *   */
let u = "one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(",");
let d = "ten,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety".split(",");
let c = "hundred";
let m = "thousand";

let sum = 0;
for( let w = 1; w <= 1000; w++ ) {
	// In this case I prefer to work with strings instead numbers.
	text 	= w.toString();
	let dd, cc, mm = 0;
	uu 		= Number(text.charAt( text.length - 1));
	if( w > 9  ) dd		= Number(text.charAt( text.length - 2));
	if( w > 99 ) cc		= Number(text.charAt( text.length - 3));
	if( w > 999) mm 	= Number(text.charAt( text.length - 4));
	
	let name = 	mm != 0 ? u[mm-1] + m : "";
	name += cc && (cc != 0) ? u[cc-1] + c : "";
	if( dd && (dd != 0) ) {
		if( cc > 0 ) name += "and";
		if ( dd == 1 ) {
			name += u[uu + 9];
		} else {
			if( uu == 0 ) {
				name += d[dd-1];
			} else {
				name += d[dd-1] + u[uu-1];
			}				
		}
	} else {
		if( uu && (uu != 0) ) {
			if( cc > 0 ) name += "and";
			name += u[uu-1];
		} 
	}
	sum += name.length;
}

console.log( sum );