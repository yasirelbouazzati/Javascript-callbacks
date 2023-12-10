import onError from "./callbacks/onError.js";

import onSuccess from "./callbacks/onSuccess.js";

import transformStringToArray from "./transformStringToCollection.js";

describe("Given function transformStringToArray", () => {
  describe("When the function is called with a value of type number", () => {
    test("Then an array containing a space should be returned.", () => {
      const value = 1;
      const result = transformStringToArray(value, onError, onSuccess);
      expect(result).toEqual([" "]);
    });
  });

  describe("When the function is called with a value of type array", () => {
    test("Then an array containing a space should be returned.", () => {
      const value = [1, 2, 3, 4, 5, 6];
      const result = transformStringToArray(value, onError, onSuccess);
      expect(result).toEqual([" "]);
    });
  });

  describe("When the function is called with a value of type boolean", () => {
    test("Then an array containing a space should be returned.", () => {
      const value = true;
      const result = transformStringToArray(value, onError, onSuccess);
      expect(result).toEqual([" "]);
    });
  });

  describe("When the function is called with an empty string value", () => {
    test("Then an empty array should be returned.", () => {
      const value = "";
      const result = transformStringToArray(value, onError, onSuccess);
      expect(result).toEqual([" "]);
    });
  });

  describe("When the function is called with a value of type string", () => {
    test("Then an array with string elements should be returned.", () => {
      const value = "cr7 is the best footballer";
      const result = transformStringToArray(value, onError, onSuccess);
      expect(result).toEqual(["cr7", "is", "the", "best", "footballer"]);
    });
  });
});
