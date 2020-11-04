/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = function(matrix) {
	// boundaries
	const cols = matrix[0].length;
	const rows = matrix.length;

	const result = [];

	for(let i = 0; i < rows; i++) {
		for(let k = 0; k < cols; k++) {

			console.log(matrix[i][k]);
			result.push(matrix[i][k]);
		}

	}

	return result;
};

console.log(spiralOrder([
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ],
]));