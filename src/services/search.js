import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";

/**
 * Handles API requests for different backend functionalities.
 *
 * @param {string} endpoint - The endpoint to which the request will be sent.
 * @param {string} zone - The zone for which the wellgorithms are to be fetched.
 */

const searchWellgorithms = async (zone, sphere, keyword) => {
  let token;
  let queries;
  let toastId;

  if (zone && sphere) {
    if (keyword) {
      queries = [
        {
          "zone.name": { equals: zone },
          "sphere.name": { equals: sphere },
          title: { contains: keyword },
        },
        {
          "zone.name": { equals: zone },
          "sphere.name": { equals: sphere },
          "process.name": { contains: keyword },
        },
        {
          "zone.name": { equals: zone },
          "sphere.name": { equals: sphere },
          "principles.ripple.name": { contains: keyword },
        },
      ];
    } else {
      queries = [
        {
          "zone.name": { equals: zone },
          "sphere.name": { equals: sphere },
        },
      ];
    }

    token = getCookie("jwt-token");

    toast(
      (t) => {
        toastId = t.id;
        return (
          <span className="flex items-center gap-3">
            Searching Wellgorithms
            <ClockLoader size={24} />
          </span>
        );
      },
      { duration: 10000 },
    );

    for (let index in queries) {
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
              where: queries[index],
            }),
          },
        );

        const jsonResponse = await response.json();

        if (
          jsonResponse &&
          jsonResponse?.success &&
          jsonResponse?.data?.totalDocs > 0
        ) {
          toast.dismiss(toastId);
          return { success: true, data: jsonResponse?.data?.docs };
        } else if (
          jsonResponse &&
          jsonResponse?.success &&
          jsonResponse?.data?.totalDocs === 0
        ) {
          toast.dismiss(toastId);
          return { error: "No wellgorithms found" };
        } else if (jsonResponse && jsonResponse?.error) {
          toast.dismiss(toastId);
          return { error: jsonResponse?.error };
        }
      } catch (error) {
        return { error: error };
      }
    }
  }
};

export default searchWellgorithms;
