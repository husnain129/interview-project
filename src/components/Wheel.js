import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import IconPosition from "./utils/icon-position";

const Wheel = () => {
  const [selectedItem, setSelectedItem] = useState(IconPosition[0].icon);

  return (
    <Flex
      w="full"
      h="max-content"
      bg="linear-gradient(90deg, rgba(208,201,201,0) 0%, rgba(255,255,255,1) 100%)"
      alignItems={"center"}
      justifyContent="center"
      flexDir={"column"}
      gap={10}
    >
      <Flex
        alignItems={"center"}
        justifyContent="center"
        position={"relative"}
        w="415px"
        h="415px"
        bg={"black"}
        borderRadius="full"
        border="10px solid lightgray"
      >
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="280px"
          h="280px"
          bg={"white"}
          borderRadius="full"
        >
          <Flex
            alignItems={"center"}
            justifyContent="center"
            w="200px"
            h="200px"
            borderRadius={"full"}
            shadow={"lg"}
            bg="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(229,225,233,1) 100%)"
          >
            <Flex
              alignItems={"center"}
              justifyContent="center"
              w="100px"
              h="100px"
              borderRadius={"full"}
              bg="linear-gradient(90deg, rgba(208,201,201,1) 0%, rgba(255,255,255,1) 100%)"
              shadow={"md"}
            >
              <Text>{selectedItem}</Text>
            </Flex>
          </Flex>
        </Flex>
        {IconPosition.map((item, index) => (
          <Flex
            cursor={"pointer"}
            onClick={() => setSelectedItem(item.icon)}
            color={"white"}
            pos={"absolute"}
            key={index}
            style={item.style}
          >
            {item.icon}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Wheel;
