import { getCookie } from "cookies-next";

/**
 * Handles API requests for different backend functionalities.
 *
 * @param {string} endpoint - The endpoint to which the request will be sent.
 * @param {string} zone - The zone for which the wellgorithms are to be fetched.
 */

const searchWellgorithmsForContactPage = async (zone, sphere) => {
  let query;
  let token;

  if (zone === undefined || zone === null || zone === "") {
    return { error: "Zone is required." };
  } else {
    if (sphere) {
      query = {
        "zone.name": { equals: zone },
        "sphere.name": { equals: sphere },
      };
    } else {
      query = {
        "zone.name": { equals: zone },
      };
    }

    token = getCookie("jwt-token");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASEURL}/fetch/wellgorithm`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            depth: 2,
            limit: 1000,
            where: query,
          }),
        },
      );

      const jsonResponse = await response.json();

      if (jsonResponse?.success) {
        if (jsonResponse.data.docs.length > 0) {
          return jsonResponse.data.docs;
        } else {
          console.log("No wellgorithms found for zone:", zone);
          return { error: `No wellgorithms found for ${zone}` };
        }
      } else if (jsonResponse?.error) {
        return { error: jsonResponse.error };
      }
    } catch (error) {
      console.log("Error while fetching wellgorithms for zone:", error);
      return { error: "Error occurred while fetching wellgorithms for zone." };
    }
  }
};

export default searchWellgorithmsForContactPage;
