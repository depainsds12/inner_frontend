"use server";

export const getIcons = async (tags = []) => {
  // "use server" need to enable this line, might involve changing cookie package
  const endpoint = `${process.env.NEXT_PUBLIC_APP_BASEURL}/fetch-icons`;
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch(endpoint, {
      cache: "default",
      method: "POST",
      headers,
      body: JSON.stringify({
        where: {
          tag: {
            in: tags,
          },
        },
      }),
    });

    const json = await response.json();

    // Parse the JSON response
    if (!response.ok && json.error != "Unauthorized Access") {
      throw new Error(JSON.stringify(json));
    }

    return json;
  } catch (error) {
    console.error("Error fetching colors:", error);
    return { error: error };
  }
};
