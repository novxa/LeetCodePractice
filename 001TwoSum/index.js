// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const input = [3, 2, 4];
const target = 6;

let pairIndex;
let matchIndex;

function findPair(list, t) {
	list.some((element, index, arr) => {
		matchIndex = arr.indexOf((t - element));

		if (matchIndex !== -1 && matchIndex !== index) {
			pairIndex = index;
			return true;
		}
	});
	return [pairIndex, matchIndex];
}

console.log(findPair(input, target));