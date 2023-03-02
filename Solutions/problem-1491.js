/*

Problem 1491: Average Salary Excluding the Minimum and Maximum Salary
    - You are given an array of **unique** integers salary where `salary[i]` is the salary of the `ith` employee.
    - Return the average salary of employees excluding the minimum and maximum salary. Answers within `10^-5` of the actual answer will be accepted.

    - Example:
    ```bash
    Input: salary = [4000,3000,1000,2000]
    Output: 2500.00000
    Explanation: Minimum salary and maximum salary are 1000 and 400 respectively.
    Average salary excluding minimum and maximum salary is (2000+3000)/2 = 2500

    Input: salary = [1000,2000,3000]
    Output: 2000.00000
    Explanation: Minimum salary and maximum salary are 1000 and 300 respectively.
    Average salary excluding minimum and maximum salary is (2000)/1 = 2000
    ```

    - Constraints:
        - `3 <= salary.length <= 100`
        - `1000 <= salary[i] <= 106`
        - All the integers of `salary` are **unique**.

*/

/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
  let max = salary[0];
  let min = salary[0];
  for (let i = 0; i < salary.length; i++) {
    if (max < salary[i]) {
      max = salary[i];
    }
    if (min > salary[i]) {
      min = salary[i];
    }
  }
  let sumSalary = 0;
  let count = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== max && salary[i] !== min) {
      count++;
      sumSalary += salary[i];
    }
  }
  return sumSalary / count;
};
