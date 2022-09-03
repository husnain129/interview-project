import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Wheel from "./Wheel";

const WheelContainer = () => {
  return (
    <VStack
      gap="2em"
      w="full"
      alignItems={"center"}
      justifyContent="center"
      h="100vh"
    >
      <Text fontSize={"2em"} fontWeight="bold">
        Shop the Job
      </Text>
      <Wheel />
      <Button
        px="20px"
        borderRadius={"full"}
        bg="black"
        variant={"none"}
        color="white"
      >
        See All Departments
      </Button>
    </VStack>
  );
};

export default WheelContainer;