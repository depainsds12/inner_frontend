"use server";

export const getColors = async (token) => {
  // "use server" need to enable this line, might involve changing cookie package
  const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/fetch/colorTemplate`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch(endpoint, {
      cache: "default",
      method: "POST",
      headers,
    });

    // Parse the JSON response
    const json = await response.json();

    if (!response.ok && json.error != "Unauthorized Access") {
      throw new Error(JSON.stringify(json));
    }

    return json;
  } catch (error) {
    console.error("Error fetching colors:", error);
    return { error: error };
  }
};
