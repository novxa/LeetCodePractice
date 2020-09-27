/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
	if (strs.length == 0) return '';

	// start prefix = first character
	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while(strs[i].indexOf(prefix) != 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if(prefix === '') { return '';}
		}
	}
	return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

