/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const mergeSort = require('../sort/mergeSort/mergesort.js');
const mergeSortModule = mergeSort();

describe('mergeSort',() =>{
  it('should be a object', () => {
    expect(mergeSortModule).to.be.a('object');
  });
});


