import React from "react";

const SectionFour = () => {
  return (
    <section class="w-full flex xs:flex-col flex-row h-screen xs:h-fit bg-[#04AC7D] mt-20">
      <div class="pl-[104px] pt-52 pb-[100px] pr-[51px]">
        <div class="w-64">
          <p class="font-normal text-base text-[#FFFFFF] opacity-75">
            Benefits
          </p>
          <p class="font-medium text-5xl text-[#FFFFFF] text">
            CO2 Compared To Coal
          </p>
          <div class="w-44">
            <p class="font-normal text-base text-white opacity-75">
              A life-cycle comparison of the energy impacts of coal versus wood
              pellets for generating heat in China. Cited from Changbo Wang, et
              al. <br />
              <br /> https://doi.org/10.1016/j.energy/2016.11.085.
            </p>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-bg-section-four bg-cover bg-bottom bg-no-repeat flex flex-row">
        {/*  */}
        <div class="w-1/3 h-full bg-[#000000] bg-opacity-50 hover:bg-[#04AC7D] hover:bg-opacity-40 flex flex-col justify-end">
          <div class="pl-[29px] pr-[28px] pb-[86px]">
            <p class="font-medium text-2xl text-[#FFFFFF]">
              Production + <br /> Transportation + <br /> Combustion
            </p>
            <p class="font-normal text-8xl text-[#FFFFFF]">32,5%</p>
            <p class="font-normal text-2xl text-[#FFFFFF]">
              Less CO<sup>2</sup> than coal
            </p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div class="w-1/3 h-full bg-[#000000] bg-opacity-40 hover:bg-[#04AC7D] hover:bg-opacity-40 flex flex-col justify-end">
          <div class="pl-[42px] pr-[29px] pb-[90px]">
            <p class="font-medium text-[24px] leading-[29px] text-[#FFFFFF] mb-10">
              Combustion
            </p>
            <p class="font-normal text-[90px] leading-[109px] text-[#FFFFFF]">
              17%
            </p>
            <p class="font-medium text-[24px] leading-[29px] text-[#FFFFFF]">
              Less CO<sup>2</sup> than coal
            </p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div class="w-1/3 h-full bg-[#000000] bg-opacity-20 hover:bg-[#04AC7D] hover:bg-opacity-40 flex flex-col justify-end">
          <div class="pl-[25px] pr-[57px] pb-[90px]">
            <p class="font-medium text-[24px] leading-[29px] text-[#FFFFFF] mb-10">
              Production
            </p>
            <p class="font-normal text-[90px] leading-[109px] text-[#FFFFFF]">
              76%
            </p>
            <p class="font-medium text-[24px] leading-[29px] text-[#FFFFFF]">
              Less CO<sup>2</sup> than coal
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default SectionFour;
