import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo_senac.svg";
import { ActiveLink } from "../ActiveLink";
import styles from "./style.module.scss";

function Header() {
  return (
    <Box
      color="white"
      display="flex"
      w="100%"
      maxW="1500px"
      h={30}
      alignItems="center"
      m="3rem auto"
      justifyContent="space-between"
    >
      <Link passHref href="/">
        <Image
          width="100%"
          style={{
            cursor: "pointer",
          }}
          height="100%"
          src={Logo}
        />
      </Link>
      <HStack w="30%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <ActiveLink activeClassName={styles.active} passHref href="/Card">
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
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} passHref href="/Bank">
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
          </ActiveLink>
          <Link passHref href="/Card">
            <Button
              bg="teal"
              _hover={{
                bg: "yellow.100",
                color: "black",
              }}
            >
              Começar
            </Button>
          </Link>
        </Flex>
      </HStack>
    </Box>
  );
}

export default Header;
