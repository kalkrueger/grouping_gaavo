const calcGaave = require('../calculate')

describe("calculations with pieces out of order", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  let stringStart = "Get your ";
  let stringEnd = " ready!"

  it('works with one piece', () => {
    calcGaave(10, [10, 6, 4, 2]);
    let piecesAsString = '10G piece'
    expect(console.log).toHaveBeenCalledWith(stringStart + piecesAsString + stringEnd);
  });

  it('works with two pieces', () => {
    calcGaave(7, [5, 2]);
    let piecesAsString = '2G and 5G pieces'
    expect(console.log).toHaveBeenCalledWith(stringStart + piecesAsString + stringEnd);
  });

  it('works with multiple pieces', () => {
    calcGaave(18, [5, 2, 3, 4, 7, 22]);
    let piecesAsString = '2G, 4G, 5G, and 7G pieces'
    expect(console.log).toHaveBeenCalledWith(stringStart + piecesAsString + stringEnd);
  });

  it('works when there is no correct solution', () => {
    calcGaave(11, [5, 2, 3, 15]);
    expect(console.log).toHaveBeenCalledWith("I'm sorry, you don't seem to have the correct change!");
  });
});
