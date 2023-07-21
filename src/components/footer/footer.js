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

import { FaPhone } from "react-icons/fa";

const footerMenu = [
  "Home",
  "About Us",
  "Benefits",
  "Certification",
  "Contact Us",
];

const Footer = () => {
  const [isMaxWidth480px] = useMediaQuery("(max-width: 400px)");

  return (
    <Box display={"flex"} flexDir="column">
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        alignItems={{ md: "center" }}
        px={{ base: "24px", sm: "40px", lg: "80px" }}
        pt={{ base: "32px" }}
        pb={{ md: "24px" }}
      >
        <Box
          display="flex"
          flexDir={"column"}
          alignItems={{ md: "flex-start" }}
        >
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Img
              src="/assets/image/enc-logo.png"
              width={{ base: "100px", md: "154px" }}
              height={{ base: "20px", md: "31px" }}
              mb="12px"
            />
          </Box>
          <Box>
            <Text
              width={{ md: "331px" }}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "17px", md: "19px" }}
              color={"black"}
              opacity={0.5}
              textAlign={{ base: "center", md: "left" }}
            >
              <Box class="mb-2">Fueling the future.</Box>
              <br /> Jl. BDN Raya No.7C, RT.5/RW.4, Cipete Sel., Kec. Cilandak,
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "column-reverse" }}
        >
          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "right" }}
            alignItems={"center"}
            gap="2"
            mt="19px"
            mb="47px"
          >
            <Box>
              <FaPhone color="#04AC7D" width={"14px"} height={"14px"} />
            </Box>
            <Box>
              <Text
                width={{ md: "132px" }}
                fontStyle={"normal"}
                fontWeight={400}
                fontSize={{ base: "14px" }}
                lineHeight={{ base: "17px" }}
                color={"black"}
                opacity={0.5}
                textAlign={{ base: "center", md: "right" }}
              >
                +62 81932888647 <span class="hidden xs:inline">|</span> Eka
                Muliawan, S.H.
              </Text>
            </Box>
          </Box>
          <Center
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "15px", lg: "32px" }}
          >
            {footerMenu.map((f) => {
              return (
                <Box>
                  <Text
                    fontWeight={400}
                    fontSize={{ base: "14px", md: "16px" }}
                    lineHeight={{ base: "17px", md: "19px" }}
                    color={"#04AC7D"}
                    cursor="pointer"
                  >
                    {f}
                  </Text>
                </Box>
              );
            })}
          </Center>
        </Box>
      </Box>
      <Center
        mt="10px"
        pt="11px"
        pb="21px"
        borderTop={"1px solid rgba(0, 0, 0, .2)"}
      >
        <Text
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "17px" }}
          opacity={0.5}
        >
          Copyright © 2023 EncBiofuel
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
