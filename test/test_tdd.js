const chai = require('chai');
const { expect } = chai;
const Matrix = require('../matrix');

describe('Matrix class', () => {
  it('should create a matrix with zeros', () => {
    const n = 3;
    const matrix = new Matrix(n);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n + 1; j++) {
        expect(matrix.get(i, j)).to.equal(0);
      }
    }
  });

  it('should correctly perform matrix multiplication and addition', () => {
    const n = 3;
    const matrix = new Matrix(n);

    matrix.set(0, 0, 2);
    matrix.set(1, 0, 3);

    matrix.mull_add(1, 0, 5);

    expect(matrix.get(1, 0)).to.equal(15); // 3 + 5 * 2 = 15
  });

  it('should correctly swap rows with nonzero elements', () => {
    const n = 3;
    const matrix = new Matrix(n);

    matrix.set(0, 1, 1);
    matrix.set(1, 1, 2);

    matrix.swap_with_nonzero_row(0);

    expect(matrix.get(0, 1)).to.equal(1);
    expect(matrix.get(1, 1)).to.equal(2);
  });

  it('should correctly check for wrong and zero rows', () => {
    const n = 3;
    const matrix = new Matrix(n);

    matrix.set(0, 0, 1);
    matrix.set(1, 1, 1);
    matrix.set(2, 2, 1);

    expect(matrix.exists_wrong_row()).to.be.false;
    expect(matrix.exists_zero_row()).to.be.true;
  });
});
