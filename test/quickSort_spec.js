/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const quickSort = require('../sort/quickSort.js');
const quickSortModule = quickSort();

describe ('qsort',() =>{
  it('should be an object', () => {
    expect(quickSortModule).to.be.a('object');
  });
  it('should define a pivot point', () => {
    quickSortModule.quickSort([1,2,3]);
    expect(pivot).to.be.equal(1);
  });
});