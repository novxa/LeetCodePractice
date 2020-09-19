const reverse = x => {
	// fake overflow
	const limit = 342147483648;

	// pos or neg?
	const n = x < 0 ? -1 : 1;

	const rev = parseInt(Math.abs(x).toString().split('').reverse().join(''));
	return rev > limit ? 0 : n * rev;
};

console.log(reverse(9646324351));
console.log(reverse(153423646900));
console.log(reverse(-321));

