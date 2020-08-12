/******** FACTORIALS ********/
	
// 4! 	=	24
// 8!	=	40320
// 10! 	=	3628800
// 100! ~ 	9.33262154439441e+157
function factorial( n ) {
	if( n == 1 ) return 1;
	return n * factorial( n - 1 );
};

// 4! 	~	23.50617513289329
// 8!	~	39902.3954526567
// 10! 	~	3598695.6187410285
// 100! ~ 	9.324847625266721e+157
function factorialStirling( n ) {
	// Stirling's approximation
	return (Math.sqrt(2*Math.PI*n) * Math.pow( n / Math.E, n ))
};

// 4! 	~	23.99999999999999
// 8!	=	40320
// 10! 	~	3628800.0000000056
// 100! ~ 	9.332621544395105e+157
function factorialLog( n ) {
	let sum = 0;
	for( let w = 1; w <= n; w++ ) {
		sum += Math.log( w );
	}
	return Math.pow( Math.E, sum );
};