import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import Logo from "../../../public/assets/image/enc-logo.png";
import MenuIcon from "../../../public/assets/icons/ic_baseline-menu.png";
import Drawer from "@/components/drawer/drawer";
import useScrollingUp from "@/hooks/useScrollingUp";

const listMenu = [
  "Home",
  "About Us",
  "Benefits",
  "Certification",
  "Contact Us",
];

// class={
//   scrolledUp
//     ? "flex justify-between items-center lg:px-6 px-[104px] py-6 z-10 bg-white fixed top-0 left-0 w-full"
//     : "flex justify-between items-center lg:px-6 px-[104px] py-6 z-10 bg-white"
// }

const header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrolledUp = useScrollingUp();
  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose} listMenu={listMenu} />
      <div
        class={
          "flex justify-between items-center lg:px-6 px-[104px] py-6 z-10 bg-white fixed top-0 left-0 w-full"
        }
      >
        <div class="w-40 h-8">
          <Image src={Logo} />
        </div>
        <nav class="2md:hidden h-full flex items-center justify-center">
          {listMenu.map((l) => {
            return <div class="py-1 px-8">{l}</div>;
          })}
        </nav>
        <div class="hidden 2md:inline-block w-7 h-7">
          <button type="button" onClick={onOpen}>
            <Image src={MenuIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
