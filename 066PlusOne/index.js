/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
	// integer overflow
	// const int = (parseInt(digits.join('')) + 1).toString().split('');
	// eslint-disable-next-line
  for(let i = digits.length - 1; i >= 0; i --){
		if(digits[i] === 9) {
			digits[i] = 0;
		}
		else {
			digits[i] += 1;
			return digits;
		}
	}
	return [1, ...digits];
};

console.log(plusOne([9]));