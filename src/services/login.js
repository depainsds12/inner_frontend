/**
 * Logs in a user by sending a POST request to the login endpoint.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @param {object} router - The Next.js router object.
 */

async function loginUser(email, password) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASEURL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      },
    );

    return await response.json();
  } catch (error) {
    return { error: `Error: occurred white logging in: ${error}` };
  }
}

export default loginUser;
