"use server";

import { PostRequest } from "@/src/libs/API";
import { LoginUserParams } from "../types/user.types";

/**
 * Logs in a user by sending a POST request to the login endpoint.
 * @param {LoginUserParams} params - The login parameters.
 */
const loginUser = async (params: LoginUserParams) => {
  try {
    const response = await PostRequest("/login", params);

    if (!response.success) {
      return {
        error: response.error || "An error occurred during login",
      };
    }

    return { data: response.data };
  } catch (error) {
    return {
      error: `Error occurred while logging in: ${error}`,
    };
  }
};

export { loginUser };
