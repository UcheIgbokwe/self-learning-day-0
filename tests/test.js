import {describe, it} from 'mocha';
import assert from 'assert';
import * as myApp from '../src/main.js';

describe("Arithmetic or Geometric sequence", function() {

	describe("handle valid input", function() {
		it("should 1,2,3,4 as an arithmetic sequence", function() {
			assert.equal(myApp.aritGeo([1, 2, 3, 4]), 'Arithmetic');
		});
		it("should 2,6,18,54 as an geometric sequence", function() {
			assert.equal(myApp.aritGeo([2, 6, 18, 54]), 'Geometric');
		});
		it("should 1,3,5,7 as an arithmetic sequence", function() {
			assert.equal(myApp.aritGeo([1, 3, 5, 7]), 'Arithmetic');
		});
		it("should 2,4,8,16 as an arithmetic sequence", function() {
			assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
		});
	})

	describe("handle invalid input",function(){
		it("should return key as not an array", function(){
			assert.equal(myApp.aritGeo('key'), '-1');
		});
		it("should return array as empty", function(){
			assert.equal(myApp.aritGeo([]), '0');
		});
		it("should return one value in array", function(){
			assert.notequal(myApp.aritGeo([5]), '-1');
		});
		it("should return arithmetic nor geometric progression", function(){
			assert.equal(myApp.aritGeo([1, 2, 3, 9, 10]), '-1');
		});
	})
})