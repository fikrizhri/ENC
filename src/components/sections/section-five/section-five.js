import React from "react";
import TableFive from "./table-five";

const SectionFive = () => {
  return (
    <section class="w-full h-screen lg:h-fit bg-[#EEEAEB] px-60 lg:px-20 md:px-4 pb-16">
      <div class="pt-[60px] md:pt-[80px] flex flex-col items-center gap-12 xs:gap-[22px]">
        <div class="w-[60%] lg:w-[75%] xs:w-fit flex flex-col gap-2">
          <p class="font-semibold text-4xl xs:text-[24px] xs:leading-[29px] text-[#005629] text-center">
            International Trade Statistics
          </p>

          <p class="font-normal text-[16px] xs:text-[12px] leading-[19px] xs:leading-[15px] text-center px-14">
            the exchange or trade of goods and services between different
            nations.
          </p>
        </div>
        <div class="w-full">
          <TableFive />
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
