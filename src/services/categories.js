/**
 * Function to fetch all categories that have subcategory data.
 *
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API or the error response.
 */
async function getCategories(categoryName = "garden") {
  const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/categoryget?category=${categoryName}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the JSON response
    const jsonResponse = await response.json();

    if (!response.ok) {
      // If response is not ok, throw an error with the response JSON
      throw new Error(JSON.stringify(jsonResponse));
    }

    return jsonResponse;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { error: error };
  }
}

export { getCategories };

// Example usage:
// getCategories()
//     .then(response => console.log('Categories fetched successfully:', response))
//     .catch(error => console.error('Fetching categories failed:', error));
