/*

Problem 412. Fizz Buzz

    - Given an integer n, return a string array answer (1-indexed) where:

			- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
			- answer[i] == "Fizz" if i is divisible by 3.
			- answer[i] == "Buzz" if i is divisible by 5.
			- answer[i] == i (as a string) if none of the above conditions are true.
    
    - Example:

			Input: n = 3
			Output: ["1","2","Fizz"]

			Input: n = 5
			Output: ["1","2","Fizz","4","Buzz"]

			Input: n = 15
			Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

		- Constraints:
			1 <= n <= 10^4

*/

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {
	let output=[];
	const checkDivide = (num)=>{
		if(num%3===0 && num%5===0) return 'FizzBuzz';
		if(num%3===0) return 'Fizz';
		if(num%5===0) return 'Buzz';
		return num+'';
	};
	for (let index = 1; index <= n; index++) {
		output.push(checkDivide(index))
	}
	return output;
};