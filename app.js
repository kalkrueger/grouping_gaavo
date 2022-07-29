const calcGaave = require( "./calculate" );
const {getInputs} = require( "./cli.js" );

/*
  - runs the entire app from start to finish
  - will exit early if `getInputs` ever returns false
		- this is triggered by a user entering 'exit'
*/
function app() {
	let inputs = getInputs();
	if ( inputs ) {
		let [fare, pieces] = inputs;
		calcGaave( fare, pieces );
	}
}

app();
