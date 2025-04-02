import { useColorMode } from "@chakra-ui/react";

const useNavIconColor = () => {
  const { colorMode } = useColorMode();

  return colorMode === "dark" ? "white" : undefined;
};

export default useNavIconColor;
