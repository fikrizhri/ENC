import { Box, Text, Img, useMediaQuery, Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

import { FiArrowRight } from "react-icons/fi";

const SectionTwo = () => {
    const [isLargerThan475] = useMediaQuery("(min-width: 475px)");
  return (
    <section class="w-full flex xs:flex-col flex-row h-screen xs:h-fit mt-20">
        <Box h={"100%"} w={"100%"} display={"flex"} flexDir={"column"} display={isLargerThan475 ? "block" : "none"}>
            <Center
                flex={1}
                display="flex"
                flexDir={"column"}
                gap={"50px"}
                bgColor={"#EEEAEB"}
                py="100px"
            >
                <Box>
                    <Img
                        objectFit={"contain"}
                        src="assets/image/FuelingFutureBig.png"
                        alt="fueling-future-logo"
                        w={{ lg: "800px", md: "700px", sm: "550px"}}
                    />
                </Box>
                <Flex direction="row" gridGap={10} w={"70%"} h={"70%"}>
                    <Box>
                        <Text color={"#000000"} textAlign={"justify"} opacity={0.5} fontSize={"16px"} lineHeight={"19px"} letterSpacing={"0.02em"}>
                                    The future prospects for wood pellets as a fuel source are positive due to the increasing demand for renewable energy and the desire to reduce dependence on fossil fuels. Additionally, the use of wood pellets helps to reduce greenhouse gas emissions, as they produce less carbon dioxide compared to traditional fuels.
                        </Text>
                    </Box>
                    <Box>
                        <Text color={"#000000"} textAlign={"justify"} opacity={0.5} fontSize={"16px"} lineHeight={"19px"} letterSpacing={"0.02em"}>
                                    In the coming years, it is expected that the demand for wood pellets will continue to grow, especially in countries where there is a high demand for renewable energy. The European Union has set a target to increase the use of renewable energy, and woods pellets are expected to play a significant role in meeting this target.
                        </Text>
                    </Box>
                </Flex>

            </Center>
        </Box>

        {/*  */}
        <Center>
            <Box pb={"15px"} display={isLargerThan475 ? "none" : "block"}>
                <Img
                    objectFit={"contain"}
                    src="assets/image/FuelingFutureLogo.png"
                    alt="fueling-future-logo"
                />
            </Box>
        </Center>
        <Center>
            <Box pt={"15px"} width={"calc(100vh)"} bgColor={"#EEEAEB"} height={"572px"} display={isLargerThan475 ? "none" : "block"}>
                <Center>
                    <Box width={"280px"}>
                        <Text color={"#000000"} textAlign={"justify"} opacity={0.75} fontSize={"14px"} lineHeight={"17px"} letterSpacing={"0.02em"}>
                            The future prospects for wood pellets as a fuel source are positive due to the increasing demand for renewable energy and the desire to reduce dependence on fossil fuels. Additionally, the use of wood pellets helps to reduce greenhouse gas emissions, as they produce less carbon dioxide compared to traditional fuels.
                            <br></br>
                            <br></br>
                            In the coming years, it is expected that the demand for wood pellets will continue to grow, especially in countries where there is a high demand for renewable energy. The European Union has set a target to increase the use of renewable energy, and woods pellets are expected to play a significant role in meeting this target.
                        </Text>
                    </Box>
                </Center>
            </Box>
        </Center>


        {/*  */}


        {/*  */}

        {/*  */}

        {/*  */}
    </section>
  );
};

export default SectionTwo;