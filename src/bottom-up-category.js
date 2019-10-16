
module.exports = function(keywords) {
	function defaultCompare(text, sub_category) {
		return text == sub_category;
	}
	function _match(str, cond) {
		let compareFn = cond || defaultCompare;
	
		for(let [key, value] of Object.entries(keywords)) {
			for(let i = 0; i < value.length; i++) {
				let v = value[i];
				if(compareFn(str, v))
					return key;
			}
		}
		return null;
	}
	
	return {
		match : _match
	};
};

