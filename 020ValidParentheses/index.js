/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
	const s2 = s.replace(/\(\)|\[\]|\{\}/, '');
	return s2 === '' ? true : s === s2 ? false : isValid(s2);
};

console.log(isValid('[([)]'));