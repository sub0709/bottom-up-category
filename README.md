# bottom-up-category


## Installation
npm install @sub0709/bottom-up-category

## usage

```js
const bottom_up_category = require('bottom-up-category');

let keywords = {
	'Health' : ['football', 'basketball'],
	'Style' : ['hair', 'trend'],
	'Digital' : ['computer', 'tv', 'camera'],
	'Shopping' : ['ebay', 'paypal', 'amazon']
};

let categories = bottom_up_category(keywords);

let category = categories.match('You got that James Dean daydream look in your eye');
console.log(category);	//no matched. result : null

category = categories.match('hair');
console.log(category);	//'hair' matched. result : Style

category = categories.match('amazon.com: Online Shopping for Electronics, Apparel');
console.log(category);	//no matched. result : null

category = categories.match('amazon.com: Online Shopping for Electronics, Apparel', function(text, sub_category) {
	return text.indexOf(sub_category) > -1;
});
console.log(category);	//'amazon' matched. result : Shopping

category = categories.match('Scores & Fixtures - Football - BBC Sport', function(text, sub_category) {
	let pattern = RegExp(sub_category, 'i');
	return text.match(pattern);
});
console.log(category);	//'Football' matched. result : Health
```

