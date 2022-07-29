/*
  Main Function
  - checks to see if a possible combination of pieces can be used to make the
    fare
  - Displays an appropiate message on the command line depeding on if a
    combination is possible or not

  input: fare (int), pieces (array of int)
  output: null
*/
function calcGaave ( fare, pieces ) {
	let correctChange = checkCombos( fare, pieces );
	if ( correctChange ) {
		console.log( piecesToString( correctChange ) );
	}else {
		console.log( "I'm sorry, you don't seem to have the correct change!" );
	}
}

/*
  Helper Functions
*/

/*
  - checks all possible cobinations of the pieces entered by the user to see if
    it is possible to make the fare
  - uses a recursive algorithm that will check all possible combinations of
    pieces from least to greatest in length, breaking early if a combination is
    found
      - this assures that the user will use the least amount of 'pieces' of
        Gaavo possible to make the fare

  input: fare (int), pieces (array of int)
  output: working combo (array of int) or false
*/
function checkCombos ( fare, pieces ) {
	let correctChange = false;

	function sumCombo ( combo ) {
		return combo.reduce( ( a, b ) => a + b, 0 );
	}

	function sumCombos ( n, src, combo ) {
		if ( n == 0 ) {
			if ( combo.length > 0 ) {
				if ( sumCombo( combo ) === fare ) {
					correctChange = combo;
				}
			}
			return;
		}
		for ( let i = 0; i < src.length; i++ ) {
			sumCombos( n - 1, src.slice( i + 1 ), combo.concat( [src[i]] ) );
			if ( correctChange ) break;
		}
	}

	for ( let len = 0; len < pieces.length; len++ ) {
		sumCombos( len, pieces, [] );
		if ( correctChange ) return correctChange;
	}

	//if a subset of the pieces does not work checks to see if all pieces work
	if ( !correctChange && sumCombo( pieces ) === fare ) {
		correctChange = pieces;
	}

	return correctChange;
}

/*
  - takes the 'pieces' array and outputs an easy to read string
  - returns the correct verbage depending on how many 'pieces' are being used

  input: pieces (array of int)
  output: string
*/
function piecesToString( pieces ) {
	let piecesAsString = "";
	let numOfPieces = pieces.length;

	//sorts pieces from least to greatest to help user locate them
	pieces.sort( function( a, b ) {
		return a - b;
	} );

	if ( numOfPieces === 1 ) {
		piecesAsString = `${pieces[0]}G piece`;
	}else if ( numOfPieces === 2 ) {
		piecesAsString = `${pieces[0]}G and ${pieces[1]}G pieces`;
	}else {
		for ( let i = 0; i < numOfPieces - 1; i++ ) {
			piecesAsString += `${pieces[i]}G, `; //for all but last piece
		}
		piecesAsString += `and ${pieces[numOfPieces - 1]}G pieces`; // last piece
	}
	return `Get your ${piecesAsString} ready!`;
}

module.exports = calcGaave;