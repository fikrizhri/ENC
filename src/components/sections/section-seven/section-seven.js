import React from "react";

// components
import {
  Box,
  Center,
  Text,
  Img,
} from "@chakra-ui/react";
import ButtonHoverSectionSeven from "@/components/button-hover/button-hover-section-seven";

// icons
import { FiArrowRight } from "react-icons/fi";

const SectionSeven = () => {
  return (
    <Center minHeight={"100vh"}>
      <Box display={"flex"} flexDir="column" alignItems={"center"}>
        <Box mb="9px">
          <Img
            w={{ base: "20px", md: "42px" }}
            h={{ base: "16px", md: "33px" }}
            objectFit={"cover"}
            src="assets/icons/icon-email.png"
            alt="icon-email"
          />
        </Box>
        <Box>
          <Text
            fontWeight={"medium"}
            fontSize={{ base: "24px", md: "36px" }}
            lineHeight={{ base: "29px", md: "44px" }}
            color="black"
            textAlign={"center"}
            mb="5px"
          >
            Become a partner?
          </Text>
          <Text
            textAlign={"center"}
            fontWeight={400}
            fontSize={{ base: "14px", md: "16px" }}
            lineHeight={{ base: "17px", md: "19px" }}
            color="black"
            opacity={0.6}
            px={{ base: "54px", md: "0px" }}
          >
            Send us your needs, we’ll reply as soon as possible.
          </Text>
        </Box>
        <Box>
          <ButtonHoverSectionSeven btnText={"Contact Us"} icon={<FiArrowRight />} />
        </Box>
      </Box>
    </Center>
  );
};

export default SectionSeven;
