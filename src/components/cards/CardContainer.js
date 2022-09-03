import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Card from "./Card";

const CardContainer = () => {
  useEffect(() => {
    console.log("first");
  }, []);
  return (
    <Flex w="full" minH={"100vh"} bg="red" p="2em">
      <Card />
    </Flex>
  );
};

export default CardContainer;
