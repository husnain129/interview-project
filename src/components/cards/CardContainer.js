import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { MdKeyboardBackspace } from "react-icons/md";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
const URL = "https://fakestoreapi.com/products";
const CardContainer = ({ history }) => {
  const [cardData, setCardData] = useState([]);
  const [pagination, setpagination] = useState({
    startIndex: 0,
    page: 1,
    endIndex: 4,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(URL);
      setCardData(res.data);
    };
    fetchPosts();
  }, []);

  const handlePagination = (action) => {
    setpagination({
      startIndex:
        action === "DEC" && pagination.startIndex > 0
          ? pagination.startIndex - 4
          : pagination.startIndex + 4,
      endIndex:
        action === "DEC" ? pagination.endIndex - 4 : pagination.endIndex + 4,
      page:
        action === "DEC" && pagination.page > 0
          ? pagination.page - 1
          : pagination.page + 1,
    });
  };

  const cardDataLimit = useMemo(() => {
    return cardData.slice(pagination.startIndex, pagination.endIndex);
  }, [cardData, pagination.endIndex, pagination.startIndex]);

  return (
    <Flex w="full" minH={"100vh"} gap="3em" p="2em" flexDir={"column"}>
      <IconButton
        onClick={() => window.history.back()}
        children={<MdKeyboardBackspace color="red" size={24} />}
        w="max-content"
      />
      <Flex
        alignItems={"center"}
        justifyContent="space-around"
        w="full"
        h="full"
        gap="1em"
        flexWrap={"wrap"}
      >
        {cardDataLimit.length > 0
          ? cardDataLimit.map((data, idx) => {
              return <Card data={data} key={idx} />;
            })
          : [...Array(10)].map((_, i) => <CardSkeleton key={i} />)}
      </Flex>
      <HStack
        w="full"
        px="1em"
        alignItems={"center"}
        justifyContent="flex-end"
        gap=".5em"
      >
        <IconButton
          children={<BiLeftArrow />}
          onClick={() => handlePagination("DEC")}
          disabled={pagination.page === 1}
        />
        <Text>{pagination.page}</Text>
        <IconButton
          children={<BiRightArrow />}
          onClick={() => handlePagination("INC")}
          disabled={pagination.page === 3}
        />
      </HStack>
    </Flex>
  );
};

export default CardContainer;
