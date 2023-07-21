import React, { useState } from "react";
import {
  Drawer as DrawerChakra,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
const Drawer = ({ onClose, isOpen, listMenu }) => {
  return (
    <>
      <DrawerChakra placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <div class="flex flex-col justify-center items-center">
              {listMenu.map((l) => {
                return <div class="pb-8">{l}</div>;
              })}
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  );
};

export default Drawer;
