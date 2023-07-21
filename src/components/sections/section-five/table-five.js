import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Center,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

const rowsDataLeft = [
  "UK",
  "Japan",
  "Denmark",
  "Netherlands",
  "Korea, Republic of",
  "Italy",
  "Belgium",
  "France",
];

const rowsDataRight = [
  { v1: "1,794,802", v2: "-1,794,207" },
  { v1: "562,691", v2: "-562,547" },
  { v1: "524,420", v2: "-372,608" },
  { v1: "499,624", v2: "-240,581" },
  { v1: "439,379", v2: "-439,379" },
  { v1: "414,321", v2: "-410,980" },
  { v1: "159,103", v2: "-48,568" },
  { v1: "150,615", v2: "-120,198" },
];

const TableFive = () => {
  const gridTemplateRows = useBreakpointValue({
    base: "repeat(5, 40px)",
    sm: "repeat(5, 87px)",
  });

  const gridItemWidth = useBreakpointValue({
    base: "98px",
    sm: "100%",
  });

  return (
    <Grid templateRows={gridTemplateRows} templateColumns="repeat(5, 1fr)">
      <GridItem
        rowSpan={5}
        colSpan={1}
        bg="black"
        mt={{ base: "40px", sm: "87px" }}
        width={gridItemWidth}
      >
        <Flex direction={"column"}>
          {rowsDataLeft.map((r, i) => {
            const textColor = i % 2 === 0 ? "text-[#04AB7D]" : "text-[#005629]";
            return (
              <Box p={{ base: "4px", sm: "10px" }}>
                <p
                  class={`font-normal ${textColor} text-[17px] leading-[21px] xs:text-[10px] xs:leading-[12px] text-right`}
                >
                  {r}
                </p>
              </Box>
            );
          })}
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={4}
        bg="black"
        display={"flex"}
        flexDirection="row"
      >
        <Center flex={1}>
          <p class="font-normal text-[17px] leading-[21px] xs:text-[9px] xs:leading-[11px] text-[#04AB7D] text-center">
            Value imported in 2021 <br /> (USD thousand)
          </p>
        </Center>
        <Center flex={1}>
          <p class="font-normal text-[17px] leading-[21px] xs:text-[9px] xs:leading-[11px] text-[#04AB7D] text-center">
            Trade balance in 2021 <br /> (USD thousand)
          </p>
        </Center>
      </GridItem>
      <GridItem rowSpan={4} colSpan={4} pl={"10px"} pr={"10px"}>
        {rowsDataRight.map((r, i) => {
          const textColor = i % 2 === 0 ? "text-[#04AB7D]" : "text-[#005629]";
          const borderColor = i % 2 === 0 ? "#04AB7D" : "#005629";
          return (
            <Flex borderBottom={"1px"} borderColor={borderColor} mt={"1px"}>
              <Center flex={1} py={{ base: "3px", sm: "9px" }}>
                <p
                  class={`font-normal xs:text-[10px] xs:leading-[12px] text-[17px] leading-[21px] ${textColor}`}
                >
                  {r.v1}
                </p>
              </Center>
              <Center flex={1} py={{ base: "3px", sm: "9px" }}>
                <p
                  class={`font-normal xs:text-[10px] xs:leading-[12px] text-[17px] leading-[21px] ${textColor}`}
                >
                  {r.v2}
                </p>
              </Center>
            </Flex>
          );
        })}
      </GridItem>
    </Grid>
  );
};

export default TableFive;
