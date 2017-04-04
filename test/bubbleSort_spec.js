/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const bubblesort = require('../bubbleSort.js');
const mySortModule = bubblesort();

describe('sort',() => {
  it('should be a function', () => {
    expect(bubblesort).to.be.a('function');
  });
  it('should swap index 0 and 1 if inex 0 is larger', () => {
    expect(mySortModule.sort([0,1])).to.be.deep.equal([0,1]);
    expect(mySortModule.sort([1,0])).to.be.deep.equal([0,1]);
  });
  it('should swap index 1 with 2 if 1 is larger', () =>{
    expect(mySortModule.sort([3,2,1])).to.be.equal([1,2,3]);
  });
});
