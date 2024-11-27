/**
 * Function to subscribe a user to the mailing list.
 *
 * @param {string} email - The email address to subscribe.
 * @returns {Promise<Object>} - A promise that resolves when the subscription is successful.
 */
async function subscribeUser(email) {
  const endpoint = "https://connect.mailerlite.com/api/subscribers";

  // Payload containing the email to be subscribed
  const payload = {
    email: email,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("User subscribed successfully!");

    // Return the JSON response from the API
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Error subscribing user:", error);

    return { error: error ?? "An unknown error occurred." };
  }
}

export default subscribeUser;
