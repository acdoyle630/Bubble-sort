/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const bubblesort = require('../sort/bubbleSort/bubbleSort.js');
const mySortModule = bubblesort();

describe('sort',() => {
  it('should be a function', () => {
    expect(bubblesort).to.be.a('function');
  });
  it('should only accept a numbered array', () => {
    expect(mySortModule.sort([1,2,3,5])).to.be.a('array');
    expect(mySortModule.sort('Hello')).to.be.equal(false);
    expect(mySortModule.sort([1,2,3,4,'grenade',9])).to.be.equal(false);
  });
  it('should swap index 0 and 1 if inex 0 is larger', () => {
    expect(mySortModule.sort([0,1])).to.be.deep.equal([0,1]);
    expect(mySortModule.sort([1,0])).to.be.deep.equal([0,1]);
  });
  it('should swap index 1 with 2 if 1 is larger', () =>{
    expect(mySortModule.sort([3,2,1])).to.be.deep.equal([1,2,3]);
  });
});
