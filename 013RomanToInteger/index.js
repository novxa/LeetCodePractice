const romans = {
	I:1,
	V:5,
	X:10,
	L:50,
	C:100,
	D:500,
	M:1000,
};

const romanToInt = function(s) {
	let sum = 0;
	const arrRoman = s.split('');

	arrRoman.forEach((e, i) => {
		romans[arrRoman[i + 1]] > romans[arrRoman[i]] ? sum -= romans[arrRoman[i]] : sum += romans[arrRoman[i]];
	});
	return(sum);
};

console.log(romanToInt('CMC'));