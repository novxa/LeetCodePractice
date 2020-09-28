const addTwoNumbers = function(l1, l2) {
	let n1 = 0;
	let n2 = 0;
	const result = [];
	let res = 0;
	l1.forEach((e, i) => {
		n1 += e * (10 ** i);
	});
	l2.forEach((e, i) => {
		n2 += e * (10 ** i);
	});
	res = n1 + n2;
	while(res > 0) {
		result.push(res % 10);
		res = Math.floor(res / 10);
	}
	return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));