import { Box, Text } from "@chakra-ui/react";

const CopyrightBar = () => {
  return (
    <Box as="footer" py={4} textAlign="center">
      <Text fontSize="sm" color="gray.600">
        {" "}
        © {new Date().getFullYear()} Developed by Anthony Iheonye. All rights
        reserved.
      </Text>
    </Box>
  );
};

export default CopyrightBar;
