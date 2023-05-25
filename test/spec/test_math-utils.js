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


/*
import {roundNumber} from '../../src/math-utils.js';

let expect = chai.expect;

suite('Testing test_test-math-utils', function() {
  
  suite('Testing roundNumber', function() {
		let testsArray = [
      {val:0.123456789, digits:3, result:0.123},
      {val:0.123456789, digits:4, result:0.1235},
      {val:0.123456789, digits:5, result:0.12346},
      {val:0.123456789, digits:6, result:0.123457},
      {val:0.123456789, digits:7, result:0.1234568},
      {val:0.123456789, digits:8, result:0.12345679},
			{val:0.123456789, digits:9, result:0.123456789},
      // rounding within [min,max]
			{val:1.222, digits:1, min: 1, result:1.2},
			{val:1.222, digits:1, min: 1.2, result:1.2},
			{val:1.222, digits:1, min: 1.21, result:1.22},  // 1 add'l place to fit min
			{val:1.888, digits:1, max: 2, result:1.9},
			{val:1.888, digits:1, max: 1.9, result:1.9},
			{val:1.888, digits:1, max: 1.89, result:1.89},  // 1 add'l place to fit max
			{val:1.246, digits:1, min: 1.21, max:1.23, result:1.246}, // 1.2 too small, 1.25 too large!
      {val:'42', digits:5, result:'42', testname:'"42" to 5 digits -> 42'},
      // bad inputs
			{val:0.123456789, digits:undefined, result:0.123456789, status:'invalid decimalDigits'},
			{val:0.123456789, digits:-1, result:0.123456789, status:'invalid decimalDigits'},
			{val:0.123456789, digits:1.5, result:0.123456789, status:'invalid decimalDigits'},
      {val:Infinity, digits:2, result:Infinity, status:'invalid value'},
      {val:-Infinity, digits:5, result:-Infinity, status:'invalid value'},
    ];
		testsArray.forEach(function(aTest) {
			const minStr = (aTest.min) ? aTest.min : 'undefined';
			const maxStr = (aTest.max) ? aTest.max : 'undefined';
			const rangeStr = (aTest.min || aTest.max) ? ', range=[' + minStr + ',' + maxStr + '] ' : ' ';
      aTest.testname = (aTest.testname) ? 
        aTest.testname : 
        '' + aTest.val + ' to ' + aTest.digits + ' digits' + rangeStr + ' -> ' + aTest.result;
      });
      testsArray.forEach(function(aTest) {
        test(aTest.testname, function() {
          let range, actualResult;
          if (aTest.min || aTest.max) {
            range = {min:aTest.min, max:aTest.max};
          }

          try {
            actualResult = roundNumber(aTest.val, aTest.digits, range);
            expect(actualResult).to.equal(aTest.result);
          } catch (error) {
            // console.error(error);
            if (aTest.status) expect(error.message).to.equal(aTest.status);
          }
          
        });
      });
    });

});
*/