/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
	if(!strs.length || strs[0] === '') { return '';}
	let i = 0;
	let prefix = '';
	const shortest = strs.sort((a, b) => a.length - b.length)[0].length;
	while(strs.every((e) => e.charAt(i) === strs[0].charAt(i)) && i < shortest) {
		prefix += strs[0][i];
		i++;
	}
	return prefix;
};

console.log(longestCommonPrefix(['a']));