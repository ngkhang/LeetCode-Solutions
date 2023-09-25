/*

Problem 2621. Sleep

    - Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

    - Example:

        Input: millis = 100
        Output: 100
        Explanation: It should return a promise that resolves after 100ms.
            let t = Date.now();
            sleep(100).then(() => {
              console.log(Date.now() - t); // 100
            });

        Input: millis = 200
        Output: 200
        Explanation: It should return a promise that resolves after 200ms.

    - Constraints:
        1 <= millis <= 1000

*/

/**
 * @param {number} millis
 */

async function sleep(millis) {
  let time = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis)
  });
  return time;
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/