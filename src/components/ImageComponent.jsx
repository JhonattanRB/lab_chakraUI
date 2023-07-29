import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const ImageComponent = () => {
  const imageUrl = "/image1.jpg"; // relative path to the image in the public folder

  return (
    <Box
      bgImage={`url(${imageUrl})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="93vh"
      w="93vw"
      mt={6}
      ml={12}
      mr={6}
      display="flex" // Add this line
      flexDirection="column" // And this line
      justifyContent="flex-end" // And this line
      alignItems="center"
    >
      <Text pt={4} align="center" justify="center" color="white" fontSize="4xl">
        DOMINA EL TERRENO
      </Text>
      <HStack spacing={6} p={4} justify="center">
        <Button
          variant="outline"
          color="white"
          borderColor="white"
          size="lg"
          _hover={{
            color: "black",
            backgroundColor: "white",
            borderColor: "white",
          }}
        >
          VER DETALLES
        </Button>
        <Button
          variant="outline"
          color="white"
          borderColor="white"
          size="lg"
          _hover={{
            color: "black",
            backgroundColor: "white",
            borderColor: "white",
          }}
        >
          VER VIDEO
        </Button>
      </HStack>
    </Box>
  );
};
