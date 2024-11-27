"use server";

import { getSession } from "@/src/server/auth";
import { getColors } from "@/src/services/colors";

const COLORS_COUNT = 14;

const createColorVariables = (theme, source) => {
  const variables = {};

  for (let i = 1; i <= COLORS_COUNT; i++) {
    const colorKey = `color${i}`;
    const value = source?.[colorKey];

    if (value) {
      variables[`--${theme}${colorKey}`] = value;
    }
  }

  return variables;
};

const setTheme = async (colorTemplate, theme) => {
  const session = await getSession();

  if (session) {
    const colors = await getColors(session.accessToken);
    if (colors.success) {
      const template = colors.data?.docs.find(
        (q) => q.colorTemplateName === colorTemplate,
      );
      const test = createColorVariables(theme, template);
      return test;
    }
  }
};

export default setTheme;
