import React from "react";

// components
import {
  Box,
  Center,
  Text,
  useMediaQuery,
  Button,
  Img,
} from "@chakra-ui/react";
import ProgressBar from "@/components/progressbar/progress-bar";

const SectionSix = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Box minHeight={"100vh"} display={"flex"} flexDir={"column"}>
      <Box
        flex={1}
        display={"flex"}
        alignItems="center"
        justifyContent={isLargerThan780 ? "space-between" : "normal"}
        px={{ base: "24px", lg: "105px" }}
        py="100px"
      >
        <Box display={isLargerThan780 ? "block" : "none"}>
          <Img
            boxSize={"452px"}
            objectFit={"contain"}
            src="assets/image/big-sgs.png"
            alt="left-sgs"
          />
        </Box>
        <Box textAlign="left">
          <Text color={"#04AC7D"} opacity={0.5} mb={"16px"}>
            system certification
          </Text>
          <Box
            bgImage="url('/assets/image/sgs.png')"
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"contain"}
            width={"146px"}
            height={"69px"}
            mb="16px"
          />
          <Box w={{ md: "382px" }}>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "17px", md: "19px" }}
              opacity={0.5}
              letterSpacing={"0.02em"}
              color="black"
              mb="20px"
              textAlign={"left"}
            >
              EncBiofuel products are available in compliance with RoHS/WEEE
              Indonesia Directives.
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "17px", md: "19px" }}
              opacity={0.5}
              letterSpacing={"0.02em"}
              color="black"
              textAlign={"left"}
            >
              Working with quality system for full design and manufacturing
              process.
            </Text>
          </Box>
          <Button
            colorScheme="teal"
            variant="outline"
            w={"229px"}
            h="54px"
            mt={"40px"}
            borderColor={"#04AC7D"}
          >
            Button
          </Button>
        </Box>
      </Box>
      <Center
        flex={1}
        display="flex"
        flexDir={"column"}
        gap={"50px"}
        bg={"black"}
        py="100px"
      >
        <Box>
          <ProgressBar />
        </Box>
        <Box px={"24px"}>
          <Text
            fontWeight={"normal"}
            fontSize={{ base: "14px", md: "16px" }}
            lineHeight={{ base: "17px", md: "19px" }}
            color={"#EEEAEB"}
            maxWidth={{ md: "594px" }}
            align="center"
          >
            “We currently act as a trader, however at this very moment we are
            actively developing our own factory with Japan and South Korea as
            our main export target in Asia.”
          </Text>
        </Box>
        <Box>
          <p class="font-normal text-[14px] leading-[17px] text-center text-[#EEEAEB] mb-[8px]">
            Eka Muliawan,S.H.
          </p>
          <p class="font-normal text-[14px] leading-[17px] text-center text-[#EEEAEB]">
            CEO
          </p>
          <div class="w-full h-[4px] bg-[#04AC7D] mt-6" />
        </Box>
      </Center>
    </Box>
  );
};

export default SectionSix;
