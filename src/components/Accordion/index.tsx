import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
  title: string;
}

function Accordion({ children, title }: AccordionProps) {
  return (
    <ChakraAccordion defaultIndex={[0]} allowMultiple border="gray">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
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

export default Accordion;
