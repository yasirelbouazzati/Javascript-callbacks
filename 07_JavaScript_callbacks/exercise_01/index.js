import onError from "./callbacks/onError.js";

import onSuccess from "./callbacks/onSuccess.js";

import transformStringToArray from "./transformStringToCollection.js";

//test with value as number and log result

const results = transformStringToArray(1, onError, onSuccess);

console.log(results);

//test with value as array and log result

const results_2 = transformStringToArray([1, 2, 3, 4], onError, onSuccess);

console.log(results_2);

//test with value as boolean and log result

const results_3 = transformStringToArray(true, onError, onSuccess);

console.log(results_3);

//test with value as empty string and log result

const results_4 = transformStringToArray("", onError, onSuccess);

console.log(results_4);

//test with value as string and log result

const results_5 = transformStringToArray(
  "cr7 is the best footballer",
  onError,
  onSuccess,
);

console.log(results_5);
