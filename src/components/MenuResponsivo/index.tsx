import { GiHamburgerMenu } from "react-icons/gi";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function HamburguerMenu() {
  return (
    <Menu colorScheme="none">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="none"
      />
      <MenuList bg="blue.900" color="white">
        <MenuItem>
          <Link passHref href="/Card">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                borderBottom: "1px solid white",
              }}
            >
              Cartão
            </Text>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link passHref href="/Bank">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                borderBottom: "1px solid white",
              }}
            >
              Bancária
            </Text>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link passHref href="/Conciliacao">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                borderBottom: "1px solid white",
              }}
            >
              Conciliações realizadas
            </Text>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link passHref href="/Card">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                borderBottom: "1px solid white",
              }}
            >
              Começar
            </Text>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
