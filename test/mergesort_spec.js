/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const mergeSort = require('../sort/mergeSort/mergesort.js');
const mergeSortModule = mergeSort();

describe('mergeSort',() =>{
  it('should sort an array', () => {
    expect(mergeSortModule.mergeSort([3,5,2,1,4])).to.be.deep.equal([1,2,3,4,5]);
  });
  it('should be an object',() => {
    expect(mergeSortModule).to.be.a('object');
  });
});


