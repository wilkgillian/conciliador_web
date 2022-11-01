import { render } from "@testing-library/react";
import Accordion from ".";
import { ThemeWrapper } from "../../utils/themeProviderTests";

describe("Accordion component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Accordion title="Arquivos">
          <p>Texto</p>
        </Accordion>
      </ThemeWrapper>
    );
    expect(getByText("Arquivos")).toBeInTheDocument();
    expect(getByText("Texto")).toBeInTheDocument();
  });
});
