import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ThemeWrapper } from "../../utils/themeProviderTests";
import { Input } from "./InputFile";

describe("Input component", () => {
  it("receiving file correctly", () => {
    const { getByText, getByRole} = render(
      <ThemeWrapper>
        <Input name="Sig" />
      </ThemeWrapper>
    );
    const inputElement = getByRole("group")
    userEvent.type(inputElement, 'Novo')
    expect(getByText("Relatório Sig:")).toBeInTheDocument();
  });
});
