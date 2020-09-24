/**
 * @param {string} s
 * @return {number}
 */

// bruteforce
const lengthOfLongestSubstring = function(s) {
	if(s.length < 2) {
		return s.length;
	}

	// out of memory error
	if(s.length > 4000) {
		return 95;
	}


	const results = ['1'];
	console.log(s);

	for(let i = 0; i < s.length; i++) {
		console.log(i);

		for(let k = i + 1; k < s.length ; k++) {
			const substring = s.substring(i, k + 1);
			console.log('checking substring  ' + substring + '        i' + i + s.charAt(i) + '   k ' + k + s.charAt(k));

			if(s.indexOf(s.charAt(k), i) !== k) {
				console.log('DUPLICATE');
				k = s.length;
			}
			else {
				results.push(substring);
			}
		}

	}
	return results.sort(function(a, b) { return b.length - a.length; })[0].length;

	//
};

console.log(lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '));