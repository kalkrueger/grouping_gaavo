const readline = require( "readline-sync" );

/*
  Main Function
  - welcomes the user then collects the inputs for `fare` and `pieces`

  output: array of [fare, pieces] or false
*/
function getInputs() {
	welcome();
	let fare = getFare();
	if ( !fare ) return false;
	let pieces = getPieces();
	if ( !pieces ) return false;
	return [fare, pieces];
}

/*
  Helper Functions
*/

/*
  welcomes user to app
*/
function welcome() {
	console.log( "Hi there! Welcome to Grouping Gaavo!" );
	console.log( "If, at anytime, you would like to exit the application enter 'exit'" );
}

/*
  sends user off if they exit the app prematurely
*/
function exit() {
	console.log( "Hope to see you back soon!" );
	return false;
}

/*
  - validates that the input is an integer greater than zero and responds with a
    helpful message if it is not

  input: String
  output: Boolean
*/
function validInt( input ) {
	let int = parseInt( input );
	if ( String( int ) !== input ) {
		console.log( "Make sure to only enter integers!" );
		return false;
	}else if ( int <= 0 ) {
		console.log( "Integers must be greater than Zero!" );
		return false;
	}
	return true;
}

/*
  - collects the fare that the user is looking for via the command line
  - can only be exited by the user entering 'exit' or a valid fare

  output: valid fare (int) or false
*/
function getFare() {
	while ( true ) {
		let fare = readline.question( "Please enter the required fare in Gaavo: " );
		if ( fare === "exit" ) {
			return exit();
		}else if ( validInt( fare ) ) {
			console.log( `The fare you entered was ${fare}G` );
			return parseInt( fare );
		}
	}
}

/*
  - collects the pieces of Gaavo that the user is in possession of
  - changes the verbage of the command line prompt depending on if the user is
    entering their firt 'piece' or a subsequent one
  - can only be exited by the user entering 'exit' or 'done'

  output: pieces (array of ints) or false
*/
function getPieces() {
	let pieces = [];
	let pieceString = "first piece of Gaavo: ";

	while ( true ) {
		let piece = readline.question( `Please enter the value of your ${pieceString}` );
		if ( piece === "exit" ) {
			return exit();
		}else if ( piece === "done" ) {
			return pieces;
		}else if ( validInt( piece ) ) {
			console.log( `The piece you entered was ${piece}G` );
			pieces.push( parseInt( piece ) );
			pieceString = "next piece of Gaavo or type 'done': ";
		}
	}
}

module.exports = {getInputs, validInt};
