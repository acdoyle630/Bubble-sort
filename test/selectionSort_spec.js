/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const selectionSort = require('../sort/selectionSort/selectionSort.js');
var sortModule = selectionSort();

describe('selection sort',() => {
  beforeEach(() => {
    sortModule = selectionSort();
  });
  it('should be a function', () => {
    expect(sortModule.selectionSort).to.be.a('function');
  });
  it('should only take an arry of numbers',() => {
    expect(sortModule.selectionSort('hello')).to.be.equal(false);
    expect(sortModule.selectionSort([1,2,'fuck'])).to.be.equal(false);
  });
  it('should sort array', () =>{
    expect(sortModule.selectionSort([3,2,1])).to.be.deep.equal([1,2,3]);
    });
    expect(sortModule.selectionSort([-19,-100,544,-1,0,888])).to.be.deep.equal([-100,-19,-1,0,544,888]);
});