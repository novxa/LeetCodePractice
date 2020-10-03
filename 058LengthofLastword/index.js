const lengthOfLastWord = function(s) {
	return s.trim().split(' ').pop().length;
};
console.log(lengthOfLastWord('test'));