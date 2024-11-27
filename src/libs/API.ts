import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_APP_BASEURL;
export const getRequestUrl = (url: string) => `${API_URL}/${url}`;

/**
 * Returns the request header with the authorization token if the route is not public
 * @param isPublicRoute - boolean
 * @returns requestHeader - object
 */
const getRequestHeader = (isPublicRoute: boolean) => {
  const requestHeader = {
    "Content-Type": "application/json",
    Authorization: "",
  };

  if (!isPublicRoute) {
    const token = cookies().get("token")?.value;

    if (token) {
      requestHeader.Authorization = `Bearer ${token}`;
    }
  }

  return requestHeader;
};

/**
 * Returns the response from the GET request
 * @param url - string
 * @param isPublicRoute - boolean
 * @returns response - object
 */
const GetRequest = async (url: string, isPublicRoute: boolean = false) => {
  const response = await fetch(getRequestUrl(url), {
    method: "GET",
    headers: getRequestHeader(isPublicRoute),
  });
  return await response.json();
};

/**
 * Returns the response from the POST request
 * @param url - string
 * @param body - object
 * @param isPublicRoute - boolean
 * @returns response - object
 */
const PostRequest = async (
  url: string,
  body: any,
  isPublicRoute: boolean = false,
) => {
  const response = await fetch(getRequestUrl(url), {
    method: "POST",
    headers: getRequestHeader(isPublicRoute),
    body: JSON.stringify(body),
  });
  return await response.json();
};

export { GetRequest, PostRequest };
