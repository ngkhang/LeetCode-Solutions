/*

Problem 1716. Calculate Money in Leetcode Bank

    - Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

    - He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.

    - Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

    - Example:

        Input: n = 4
        Output: 10
        Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

        Input: n = 10
        Output: 37
        Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

        Input: n = 20
        Output: 96
        Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.

    - Constraints:

        1 <= n <= 1000

*/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const format = (ni, count = 7) => {
    const nth = ni + count - 1;
    return ((ni + nth) * count) / 2;
  }

  let fullWeek = Math.floor(n / 7);
  let sub = n - fullWeek * 7;
  let total = 0;
  while (true) {
    if (sub !== 0) {
      total += format(fullWeek + 1, sub);
      sub = 0;
    }
    if (fullWeek === 0) return total;

    total += format(fullWeek);
    fullWeek--;
  }
};