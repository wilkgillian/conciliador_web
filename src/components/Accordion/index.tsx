import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AccordionProps } from "../../types";


export default function Accordion({ children, title }: AccordionProps) {
  return (
    <ChakraAccordion defaultIndex={[0]} allowMultiple border="gray">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center" fontSize={15} fontWeight="bold" mt={5} color="yellow.500">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  );
}

