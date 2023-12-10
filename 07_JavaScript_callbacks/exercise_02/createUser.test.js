import onSuccess from "./callbacks/onSuccess.js";

import onError from "./callbacks/onError.js";

import createUser from "./createUser.js";

describe("Given function createUser", () => {
  describe("When the function is called with an empty string value", () => {
    test("Then the text Error: user not created should be returned.", () => {
      const email = " ";

      const result = createUser(email, onError, onSuccess);

      expect(result).toEqual("Error: user not created");
    });
  });

  describe("When the function is called with a value of type string", () => {
    const email = "yasir7bouazzati@gmail.com";

    test(
      "Then the text User with email " +
        email +
        " has been correctly created should be returned.",
      () => {
        const email = "yasir7bouazzati@gmail.com";

        const result = createUser(email, onError, onSuccess);

        expect(result).toEqual(
          "User with email " + email + " has been correctly created",
        );
      },
    );
  });
});
