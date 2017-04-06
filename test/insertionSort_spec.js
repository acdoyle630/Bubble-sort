/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const insertionSort = require('../sort/insertionSort/insertionSort.js');
let mySortModule = insertionSort();

describe('insertionSort',() => {
  it('should be a function', () => {
    expect(insertionSort).to.be.a('function');
  });
  it('should only accept a numbered arry',()=> {
    expect(mySortModule.insertionSort(['hello','world'])).to.be.equal(false);
  });
  it('should return false if datatype is not array', () => {
    expect(mySortModule.insertionSort(1,2,5)).to.be.equal(false);
  });
  it('should return a sorted array', () => {
    expect(mySortModule.insertionSort([12,0,1])).to.be.deep.equal([0,1,12]);
    });
});