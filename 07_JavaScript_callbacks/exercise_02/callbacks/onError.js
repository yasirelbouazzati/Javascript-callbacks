/**
 * Define 'onSuccess' function and signature
 * It receives an email as string and returns a string
 *
 * input:
 *  - email: string
 *
 * output:
 *  - string: User with email {email} has been correctly created
 */

/**
 *
 * @param {string} email
 * @returns string
 */

function onSuccess(email) {
  return `User with email ${email} has been correctly created`;
}

export default onSuccess;
