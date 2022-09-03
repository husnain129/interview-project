import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Wheel from "./Wheel";

const WheelContainer = ({ route, setRoute }) => {
  return (
    <VStack
      w="full"
      alignItems={"center"}
      justifyContent="space-around"
      minH="100vh"
    >
      <Text fontSize={"2em"} fontWeight="bold">
        Shop the Job
      </Text>
      <Wheel route={route} setRoute={setRoute} />
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
