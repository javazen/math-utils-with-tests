import {roundNumber} from '../../src/math-utils.js';

let expect = chai.expect;

suite('Testing test_test-math-utils', function() {
  
  suite('Testing roundNumber', function() {
	test('simple 1-digit test', function() {

		let actualResult = roundNumber(1.738, 1);
		expect(actualResult).to.equal(1.7);
	});
	test('simple 2-digit test', function() {

		let actualResult = roundNumber(1.738, 2);
		expect(actualResult).to.equal(1.74);
	});
   });

});
