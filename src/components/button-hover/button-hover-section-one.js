import React, { useState } from "react";

// components
import { Button } from "@chakra-ui/react";

// keyframes
import { keyframes } from "@emotion/react";

const ButtonHoverSectionOne = ({ btnText, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const grow = keyframes`
  from {
    width: 185px;
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
      bgColor={"transparent"}
      color={"#FFFFFF"}
      rightIcon={icon}
      fontFamily="'Inter Tight', normal"
      fontWeight={ isHovered ? 600 : 400}
      fontSize={"16px"}
      lineHeight={"20px"}
      width={"185px"}
      height={"43px"}
      borderRadius={"1px"}
      border={"1px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animation={`${isHovered ? grow : ""} 0.2s`}
      transition="width 0.2s ease-out"
      _hover={{ width : "200px" }}
    >
      {btnText}
    </Button>
  );
};

export default ButtonHoverSectionOne;
