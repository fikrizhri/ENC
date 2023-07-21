import { Box, Text, Img, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import { FiArrowRight } from "react-icons/fi";
import ButtonHoverSectionOne from "@/components/button-hover/button-hover-section-one";

const SectionOne = () => {
    const [isLargerThan475] = useMediaQuery("(min-width: 475px)");
  return (
    <section class="w-full flex xs:flex-col flex-row h-screen xs:h-fit mt-20">
        {/*  */}

        {/*  */}

        {/*  */}

        {/*  */}

        {/*  */}
        <div class="w-2/3 flex flex-col">
            <div class="relative h-1/3 w-full bg-white xs:hidden">
                <Box ml={{ xl:"200px", lg:"60px", md: "30px", sm:"30px"}} mt={{ xl:"170px", lg:"160px", md:"140px", sm:"160px"}}>
                        <Text
                            fontWeight={"medium"}
                            fontSize={{ xl: "16px", lg: "14px", md: "12px", sm:"8px" }}
                            lineHeight={{ base: "19px" }}
                            color="black"
                            opacity="0.45"
                            textAlign={"justify"}
                            mb="5px"
                        >
                            Through wood pellets we want to change the world into a better place by becoming 
                            <br></br>
                            a suppliers of wood pellets from Indonesia. In order to do so, we ensure that our 
                            <br></br>
                            products can meet the specifications of your needs.
                        </Text>
                </Box>
            </div>

            <div class="w-[951px] h-[280px] 
            bg-logo-group-desktop-section-one 
            bg-contain bg-no-repeat absolute 
            left-[200px] top-[350px] 
            xl:w-[700px] xl:h-[200px] xl:left-[168px] xl:top-[315px] lg:w-[700px] 
            lg:h-[120px] lg:left-[40px] lg:top-[315px]
            md:h-[120px] md:left-[30px] md:top-[315px]
            sm:h-[90px] sm:left-[20px] sm:top-[315px]
            xs:hidden
            ">
            </div>

            <div class="h-2/3 w-full bg-cyan">

            </div>
        </div>

            {/*  */}
            <div class="w-1/3 bg-left-bg-section-one bg-cover bg-bottom bg-no-repeat flex flex-col justify-end h-screen xs:w-full xs:bg-left-bg-section-one-mobile xs:bg-cover xs:bg-bottom xs:bg-no-repeat">
                    <div class="xs:w-64 xs:h-11 xs:bg-logo-group-mobile-section-one xs:bg-no-repeat xs:ml-[66px] xs:mb-[12px] xr:ml-[65px]">
                    </div>
                    <Box display={isLargerThan475 ? "none" : "block"}>
                        <Text
                            fontWeight={"medium"}
                            fontSize={{ base: "14px" }}
                            lineHeight={{ base: "16px" }}
                            color="white"
                            textAlign={"center"}
                            mb="5px"
                        >
                            Through wood pellets we want to change the 
                            <br></br>
                            world into a better place by becoming a suppliers 
                            <br></br>
                            of wood pellets from Indonesia. In order to do so, 
                            <br></br>
                            we ensure that our products can meet the 
                            <br></br>
                            specifications of your needs.
                        </Text>
                    </Box>
                    <div class="xr:ml-[12px]">
                        <Box ml={{ base: "87px", md: "29px", sm:"15px"}} mb={{ base: "305px", md: "191px", sm:"200px"}}>
                            <ButtonHoverSectionOne btnText={"Learn more"} icon={<FiArrowRight />} />
                        </Box>
                    </div>
            </div>

        {/* </div> */}
    </section>
  );
};

export default SectionOne;