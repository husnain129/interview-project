import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconPosition from "./utils/icon-position";

const Wheel = ({ route, setRoute }) => {
  const [selectedItem, setSelectedItem] = useState(IconPosition[0].icon);
  const [cliecked, setCliecked] = useState(0);

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
        w="410px"
        h="410px"
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
              <Link to={`/${route}`}>
                <Box cursor={"pointer"}>{selectedItem}</Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        {IconPosition.map((item, index) => (
          <Flex
            cursor={"pointer"}
            onClick={() => {
              setCliecked(() => cliecked + 1);
              setRoute(item.path);
              setSelectedItem(item.icon);
            }}
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
