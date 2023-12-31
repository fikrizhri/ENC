import Head from "next/head";
import Script from "next/script";

// components
import SectionOne from "@/components/sections/section-one/section-one";
import SectionTwo from "@/components/sections/section-two/section-two";
import SectionFive from "@/components/sections/section-five/section-five";
import SectionFour from "@/components/sections/section-four/section-four";
import SectionSix from "@/components/sections/section-six/section-six";
import SectionSeven from "@/components/sections/section-seven/section-seven";

export default function Home() {
  return (
    <>
      <Head>
        <title>EncBioFuel | Eka Cipta Nusantara</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/enc.svg" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div class="flex flex-col">
          {/* section-1 goes here */}
          <SectionOne />

          {/* section-2 goes here */}
          <SectionTwo />

          {/* section-3 goes here */}

          {/* section-4 goes here */}
          <SectionFour />

          {/* section-5 goes here */}
          <SectionFive />

          {/* section-6 goes here */}
          <SectionSix />

          {/* section-7 goes here */}
          <SectionSeven />
        </div>
      </main>
    </>
  );
}
