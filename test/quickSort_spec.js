/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const quickSort = require('../sort/quickSort/quickSort.js');
let quickSortModule = quickSort();

describe ('quicksort',() =>{
  it('should be an object', () => {
    expect(quickSortModule).to.be.a('object');
  });
  it('should only take an array of numbers', () => {
    expect(quickSortModule.quickSort(['hello','world'])).to.be.equal(false);
  });
  it('should sort an array',() => {
    expect(quickSortModule.quickSort([2,3,4,1])).to.be.deep.equal([1,2,3,4]);
  });
});

