"use server";

import { PostRequest } from "@/src/libs/API";

const getZones = async () => {
  try {
    const response = await PostRequest("/fetch/zone", { depth: 1 });

    if (!response.success) {
      return {
        error: response.error || "An error occurred while fetching zones",
      };
    }

    return response.data;
  } catch (error) {
    return {
      error: `Error occurred while fetching zones: ${error}`,
    };
  }
};

export { getZones };
