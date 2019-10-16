/*

mocha test/configstore

*/

const bottom_up_category = require('./bottom-up-category');

var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈

describe('test', function() {
	let keywords = {
		'Health' : ['football', 'basketball'],
		'Style' : ['hair', 'trend'],
		'Digital' : ['computer', 'tv', 'camera'],
		'Shopping' : ['ebay', 'paypal', 'amazon']
	};
	
	let test = [
		'You got that James Dean daydream look in your eye',
		'hair',
		'amazon.com: Online Shopping for Electronics, Apparel',
		'Scores & Fixtures - Football - BBC Sport',
	];
	
	let categories = bottom_up_category(keywords);

	// test cases
	it('no match', function () {
		let category_name = categories.match(test[0]);
		assert.equal(null, category_name);

	});

	it('match', function () {
		let category_name = categories.match(test[1]);
		assert.equal('Style', category_name);
	});

	it('search', function () {
		let category_name = categories.match(test[2], function(text, sub_category) {
			return text.indexOf(sub_category) > -1;
		});
		assert.equal('Shopping', category_name);
	});

	it('regexp', function () {
		let category_name = categories.match(test[3], function(text, sub_category) {
			let pattern = RegExp(sub_category, 'i');
			return text.match(pattern);
		});
		assert.equal('Health', category_name);
	});

});
