const {validInt} = require( "../cli" );

describe( "test valid inputs and responses to invalid inputs", () => {
	beforeEach( () => {
		console.log = jest.fn();
	});

	it( "positive int is valid", () => {
		expect( validInt( "12" ) ).toBe( true );
	});

	it( "negative int is invalid", () => {
		expect( validInt( "-12" ) ).toBe( false );
		expect( console.log ).toHaveBeenCalledWith( "Integers must be greater than Zero!" );
	});

	it( "Zero is invalid", () => {
		expect( validInt( "0" ) ).toBe( false );
		expect( console.log ).toHaveBeenCalledWith( "Integers must be greater than Zero!" );
	});

	it( "floats are invalid", () => {
		expect( validInt( "5.5" ) ).toBe( false );
		expect( console.log ).toHaveBeenCalledWith( "Make sure to only enter integers!" );
	});

	it( "input containing leters are invalid", () => {
		expect( validInt( "5G" ) ).toBe( false );
		expect( console.log ).toHaveBeenCalledWith( "Make sure to only enter integers!" );
	});
});
