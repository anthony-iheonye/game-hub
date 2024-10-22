import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// extend the them
const theme = extendTheme({ config });

export default theme;
