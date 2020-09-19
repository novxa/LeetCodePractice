function palindrome(x) {
	// pos or neg?
	const reverse = parseInt(x.toString().split('').reverse().join(''));
	return reverse == x ? true : false;
}

console.log(palindrome(1234321));
