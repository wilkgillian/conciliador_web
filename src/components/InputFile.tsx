import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputFileProps extends InputProps {
  name: string;
  label?: string;
  error?: string;
}

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
