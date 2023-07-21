import React, { useState } from "react";

// components
import { Button } from "@chakra-ui/react";

// keyframes
import { keyframes } from "@emotion/react";

const ButtonHoverSectionSeven = ({ btnText, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const grow = keyframes`
  from {
    width: 177px;
  }
  to {
    width: 200px;
  }
`;

  return (
    <Button
      mt={"32px"}
      size="lg"
      variant={"solid"}
      bgColor={"#04AC7D"}
      color={"#FFFFFF"}
      rightIcon={icon}
      fontFamily="'Oxygen', sans-serif"
      fontWeight={ isHovered ? 600 : 400}
      fontSize={"16px"}
      lineHeight={"20px"}
      width={"177px"}
      height={"55px"}
      borderRadius={"none"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animation={`${isHovered ? grow : ""} 0.2s`}
      transition="width 0.2s ease-out"
      _hover={{ bg: "#04AC7D", width : "200px" }}
    >
      {btnText}
    </Button>
  );
};

export default ButtonHoverSectionSeven;
