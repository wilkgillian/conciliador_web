import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { InputFileProps } from "../../types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputFileProps> = ({
  name,
  label,
  error = null,
  ...rest
}) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      Relatório {name}:
      <ChakraInput
        as="input"
        mt={2}
        name={name}
        id={name}
        type="file"
        borderColor="teal"
        variant="flushed"
        {...rest}
      />
      {!!error && <FormErrorMessage>Insira o arquivo</FormErrorMessage>}
    </FormControl>
  );
};
export const Input = forwardRef(InputBase);
