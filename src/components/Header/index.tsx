import {
  Box,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo_senac.svg";
import { ActiveLink } from "../ActiveLink";
import styles from "./style.module.scss";
import StartButton from "../Buttons/StartButton";
import { useRouter } from "next/router";
import HamburguerMenu from "../MenuResponsivo";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const router = useRouter();
  return (
    <Box
      color="white"
      display="flex"
      w="100%"
      maxW={1480}
      px={["30", "15", "5"]}
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
      <HStack w="40%" justifyContent={isWideVersion ? "" : "flex-end"}>
        {isWideVersion ? (
          <Flex
            w="100%"
            justifyContent={
              router.asPath == "/" ? "space-evenly" : "space-between"
            }
            alignItems="center"
          >
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
            <ActiveLink
              activeClassName={styles.active}
              passHref
              href="/Conciliacao"
            >
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
            </ActiveLink>
            <Box>{router.asPath == "/" ? "" : <StartButton />}</Box>
          </Flex>
        ) : (
          <HamburguerMenu />
        )}
      </HStack>
    </Box>
  );
}
