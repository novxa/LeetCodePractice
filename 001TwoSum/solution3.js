// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const input = [3, 2, 4];
const target = 6;

function findPair(list, t) {
	const l = list.length;
	for (let i = 0; i < l; i++) {
		for (let j = i + 1; j < l; j++) {
			if ((t - list[j]) === list[i]) { return [i, j];}
		}
	}
}

console.log(findPair(input, target));