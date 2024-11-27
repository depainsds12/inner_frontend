"use server";

import { getIcons } from "@/src/services/icons";

const getTagUrls = async (tags) => {
  const icons = await getIcons(tags);
  return icons.data?.docs;
};

export default getTagUrls;
