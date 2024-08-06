"use client";
import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={1}
      bgColor="gray"
      h="50px"
      alignItems="center"
      justifyContent="right"
      pr={4}
    >
      <Menu>
        <MenuButton as={Button}>
          <SettingsIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={toggleColorMode}>Change theme color</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
