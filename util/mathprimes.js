/**
 *  primes.js
 *  
 *  Copyright (c) 2020, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license. 
 *  See <license.txt> file for details.
 *  
 *  @date     02/08/20
 *  @version  v0.1
 *  
 *  @brief    This file contains a set of math functions for prime numbers and factorization.  
 */
 
 
class MathPrimes {
	static getPrime( n ) {
		return _primes[ n + 1 ];
	};
	
	static getMaxPrime() {
		return _primes[ _primes.length - 1 ];
	};
	
	static isPrime( numToCheck, primesArray=_primes ) {
		return primesArray.find( prime => numToCheck % prime == 0) == numToCheck ? true : false;
	};
	
	static getTableLength() {
		return _primes.length;
	};
	
	static getNextPrime( n ) {
		let prime = _primes.find( prime => prime > n );
		if( !prime ) throw new Error("getNextPrime(): The number is too big.");
		return prime;
	};
	
	static getPreviousPrime( n ) {
		if( n == 2 ) return 2;
		if( _primes.find( prime => n % prime == 0) == n ) {
			return _primes[_primes.indexOf(n) - 1];
		} else {
			let prime = _primes.find( prime => prime > n );
			return _primes[_primes.indexOf(prime) - 1];
		};
	};
	
	static getPi( n ) {
		if( n == 2 ) return 1;
		if( _primes.find( prime => n % prime == 0) == n ) {
			return _primes.indexOf(n) + 1;
		} else {
			let prime = _primes.find( prime => prime > n );
			if( !prime ) throw new Error("getPi(): The number is too big.");
			return _primes.indexOf(prime);
		}		
	};
	
	static sigmaSum( n ) {
		let originalN = n;
		let t = 0;
		let divisors = [];
		let count = 0;
		let sum = 1;
		let total = 1;
		while( n > 1 ) {
			if( n % _primes[t] == 0) {
				count++;
				sum += Math.pow(_primes[t], count);
				n /= _primes[t];
			} else {
				total *= sum;
				sum = 1;
				t++;
				count = 0;
			};
		};
		total *= sum;
		return total - originalN;
	};
	
	static getDivisors( n ) {
		let t = 0;
		let divisors = [];
		while( n > 1 ) {
			if( n % _primes[t] == 0) {
				divisors.push( _primes[t] );				
				n /= _primes[t];
			} else {
				t++;
			};
		};
		return divisors;
	};
	
	static getNumDivisors( n ) {
		let t = 0;
		let divisors = [];
		while( n > 1 ) {
			if( n % _primes[t] == 0) {
				if( !divisors[t] ) {
					divisors[t] = 1;
				} else {
					divisors[t]++;
				}				
				n /= _primes[t];
			} else {
				t++;
			};
		};
		let num = 1;
		for( let w = 0; w < divisors.length; w++ ) {
			if( !divisors[w] ) continue;
			num *= (divisors[w] + 1)
		};
		return num-1;
	};
	
	/**
	 *  @brief Creates an array of prime numbers up to specified argument.
	 *  
	 *  @param [Int] max The maximum number to check.
	 *  @return Array filled with all primes up to max argument.
	 *  
	 *  @details The function uses "Eratosthenes Sieve" algorithm to find all primes. It optmizes searching only for odd numbers and jumping multiples of 5. It's like searching only for 4n-1 and 4n+1 numbers.
	 */
	static createPrimesArray( max ) {
		let primes = [3,5];
		for( let w = 7; w <= max; w += 2 ) {
			if (w % 5 == 0) {
				continue;
			} else {
				if( !primes.find( prime => w % prime == 0) ) {
					primes.push(w);
				}
			}
		}
		primes.unshift(2);
		return primes;		
	};
	
	static debug() {
		console.log( "******** MATHPRIME DEBUG ********");
		console.log( "* TABLE OF PRIMES UNDER 2000000");
		console.log( "* Number of primes:	 " + _primes.length);
		console.log( "* Max prime in table:	 " + _primes[_primes.length - 1]);
		console.log( "*********************************");
	}
};

/**
 *  @brief Extract whole and decimal part of a number.
 *  
 *  @param [in] num   The number to work
 *  @param [in] digit How many digits the function will extract
 *  @return Object An Object with 'whole' and 'dec' attributes
 *  
 *  @details If the number of digits isn't specified, the function will return 1 digit.
 */
function getDecimal( num, digit=1 ) {
	if( !Number.isInteger( n ) ) {
		dec = (n - ( n >> 0)) * Math.pow(10, digit) >> 0;
	};
	whole = n >> 0;
	return {
		whole: whole,
		dec: dec
	};
};