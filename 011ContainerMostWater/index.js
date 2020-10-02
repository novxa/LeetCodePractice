/**
 * @param {number[]} height
 * @return {number}
 */
// brute force
const maxArea = function(height) {
	let area = 0;
	for(let i = 0; i < height.length; i++) {
		for(let j = i + 1; j < height.length; j++) {
			if(Math.min(height[i], height[j]) * (j - i) > area) {area = Math.min(height[i], height[j]) * (j - i);}
		}
	}
	return area;
};

// onepass
const maxArea2 = function(height) {
	let area = 0;
	let i = 0;
	let j = height.length - 1;
	while(j > i) {
		area = Math.max(area, (Math.min(height[i], height[j]) * (j - i)));
		height[i] > height[j] ? j-- : i++;
	}
	return area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));