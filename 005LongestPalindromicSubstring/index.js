/**
 * @param {string} s
 * @return {string}
 */


const longestPalindrome = function(s) {
	let longest = '';

	for(let i = 0; i < s.length; i++) {
		for(let k = 1; k <= s.length; k++) {
			const substring = s.substring(i, k);
			if(checkPalindrome(substring)) {
				if(substring.length > longest.length) {longest = substring;}
			}
		}
	}
	return longest;

};
function checkPalindrome(s) {
	const sr = s.split('').reverse().join('');
	return sr === s;
}

console.log(longestPalindrome('babad'));


// console.log('asd;lfaksdjf'.substring(0, 1));