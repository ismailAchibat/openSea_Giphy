import { Button, Divider, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/openSea-removebg-preview.png";
import SearchInput from "../SearchInput";
import "./NavBar.css";

const NavBar = () => {
  return (
    <HStack marginTop={4} marginBottom={5} marginLeft={5} marginRight={5}>
      <Image src={logo} width={{ base: "40px", lg: "60px" }} />
      <Text fontWeight="bold" fontSize="2xl">
        OpenSea
      </Text>
      <Divider
        orientation="vertical"
        height="40px"
        color="white"
        marginRight={4}
        marginLeft={4}
      />
      <div className="willBeRemoved">
        <Text fontSize="lg" marginRight={3}>
          Drops
        </Text>
        <Text fontSize="lg" marginRight={3}>
          Stats
        </Text>
        <Text fontSize="lg" marginRight={50}>
          Create
        </Text>
      </div>
      <SearchInput />
      <Button borderRadius="15px" marginLeft={50}>
        Log in
      </Button>
    </HStack>
  );
};

export default NavBar;
