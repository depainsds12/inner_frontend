/**
 * Function to initiate a forgot password request.
 *
 * @param {string} email - The email address of the user.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API or the error response.
 */
async function forgotPassword(email) {
  try {
    const userData = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASEURL}/fetch/user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          depth: 0,
          where: {
            email: {
              equals: email,
            },
          },
        }),
      },
    );

    const result = await userData.json();

    if (result.data.docs[0].verified === true) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASEURL}/user/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      const jsonResponse = await response.json();

      if (jsonResponse.message === "Success") {
        return {
          success: "A password reset link has been sent to your email address.",
        };
      } else {
        return { error: "Error: occurred while resetting the password." };
      }
    } else if (result.data.docs[0].verified === false) {
      return { error: "Your email is not verified yet." };
    } else if (result.data.docs[0].approved === "No") {
      return {
        error: "Please wait for your account to be approved by the admin.",
      };
    }
  } catch (error) {
    return { error: "Error: occurred while resetting the password." };
  }
}

export default forgotPassword;
