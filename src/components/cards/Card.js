import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = (data) => {
  return (
    <VStack
      _hover={{
        boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.2)",
      }}
      cursor={"pointer"}
      w="15em"
      h="22em"
      shadow={"md"}
      py="1em"
    >
      {Object.keys(data).length > 0 && (
        <Image
          objectPosition={"top"}
          objectFit={"contain"}
          src={data.data.image}
          h="10em"
          w="10em"
        />
      )}
      <Text fontWeight={"semibold"}>New Test Seller</Text>
      <Flex
        flexDir={"column"}
        px="1em"
        alignItems={"flex-start"}
        justifyContent="flex-start"
        w="full"
      >
        <Text fontWeight={"bold"}>2123</Text>
        <Text color={"#5C5553"} fontSize=".9em">
          Retail value: $ 4500
        </Text>
        <Text color={"#5C5553"} fontSize=".9em">
          Brand: Florida Tile
        </Text>
        <Text color={"#5C5553"} fontSize=".9em">
          Store E-Store: 01
        </Text>
        <Text color={"#5C5553"} fontSize=".9em">
          Store Distance: 1 m
        </Text>
      </Flex>
    </VStack>
  );
};

export default Card;
