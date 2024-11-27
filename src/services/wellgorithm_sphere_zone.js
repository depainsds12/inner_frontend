import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";

/**
 * Handles API requests for different backend functionalities.
 *
 * @param {string} endpoint - The endpoint to which the request will be sent.
 * @param {string} zone - The zone for which the wellgorithms are to be fetched.
 */

const fetchWellgorithmsForZone = async (zone, sphere) => {
  let token;
  let query;
  let toastId;

  if (zone && sphere) {
    console.log(zone);
    console.log(sphere);

    query = {
      "zone.name": { equals: zone },
      "sphere.name": { equals: sphere },
    };

    token = getCookie("jwt-token");

    try {
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

      if (
        jsonResponse &&
        jsonResponse?.success &&
        jsonResponse?.data?.totalDocs > 0
      ) {
        console.log(jsonResponse);
        toast.dismiss(toastId);
        return { success: true, data: jsonResponse?.data?.docs };
      } else if (
        jsonResponse &&
        jsonResponse?.success &&
        jsonResponse?.data?.totalDocs === 0
      ) {
        console.log(jsonResponse);
        toast.dismiss(toastId);
        return { error: "No wellgorithms found" };
      } else if (jsonResponse && jsonResponse?.error) {
        console.log(jsonResponse);
        toast.dismiss(toastId);
        return { error: jsonResponse?.error };
      }
    } catch (error) {
      console.log("Error while fetching wellgorithms for zone:", error);
      return { error: "Error occurred while fetching wellgorithms for zone." };
    }
  }
};

export default fetchWellgorithmsForZone;
