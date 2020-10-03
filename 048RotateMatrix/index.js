/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
	matrix = matrix.reverse();
	for(const i in matrix) {for(let j = 0; j < i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];}
	return matrix;
};

console.log(rotate());