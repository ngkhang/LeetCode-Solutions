# Programming Skills

---

## Topic Level 1

### Day 1: Basic Data Type

#### 1523. Count Odd Numbers in an Interval Range

- Given two non-negative integers `low` and `high`. Return the count of odd numbers between `low` and `high` (inclusive).
- Example:

  ```txt
  //=== Example 1:
  Input: low = 3, high = 7
  Output: 3
  Explanation: The odd numbers between 3 and 7 are [3,5,7].

  //=== Example 2:
  Input: low = 8, high = 10
  Output: 1
  Explanation: The odd numbers between 8 and 10 are [9].
  ```

- Constraints:
    `0 <= low <= high <= 10^9`

[Solution](Solutions/problem-1523.js)

#### 1491. Average Salary Excluding the Minimum and Maximum Salary

- You are given an array of **unique** integers salary where `salary[i]` is the salary of the `ith` employee.

- Return the average salary of employees excluding the minimum and maximum salary. Answers within `10^-5` of the actual answer will be accepted.
- Example:

  ```txt
  //=== Example 1:
  Input: salary = [4000,3000,1000,2000]
  Output: 2500.00000
  Explanation: Minimum salary and maximum salary are 1000 and 400 respectively.
  Average salary excluding minimum and maximum salary is (2000+3000)/2 = 2500

  //=== Example 2:
  Input: salary = [1000,2000,3000]
  Output: 2000.00000
  Explanation: Minimum salary and maximum salary are 1000 and 300 respectively.
  Average salary excluding minimum and maximum salary is (2000)/1 = 2000
  ```

- Constraints:
  - `3 <= salary.length <= 100`
  - `1000 <= salary[i] <= 106`
  - All the integers of `salary` are **unique**.

[Solution](Solutions/problem-1491.js)

---

### Day 2: Operator

#### 191. Number of 1 Bits

- Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

- Note:
  - Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
  - In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

- Example:

  ```txt
  //Example 1:
  Input: n = 00000000000000000000000000001011
  Output: 3
  Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
  
  //Example 2:
  Input: n = 00000000000000000000000010000000
  Output: 1
  Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
  
  //Example 3:
  Input: n = 11111111111111111111111111111101
  Output: 31
  Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
  ```

- Constraints:
  The input must be a **binary string** of length **32**.

[Solution](Solutions/problem-191.js)

#### 1281. Subtract the Product and Sum of Digits of an Integer

- Given an integer number `n`, return the difference between the product of its digits and the sum of its digits.

- Example:

  ```txt
  //Example 1:
  Input: n = 234
  Output: 15 
  Explanation: 
  Product of digits = 2 * 3 * 4 = 24 
  Sum of digits = 2 + 3 + 4 = 9 
  Result = 24 - 9 = 15
  
  //Example 2:
  Input: n = 4421
  Output: 21
  Explanation: 
  Product of digits = 4 * 4 * 2 * 1 = 32 
  Sum of digits = 4 + 4 + 2 + 1 = 11 
  Result = 32 - 11 = 21
  ```

- Constraints:
  `1 <= n <= 10^5`

[Solution](Solutions/problem-1281.js)

---
