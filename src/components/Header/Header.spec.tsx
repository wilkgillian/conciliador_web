import { render } from "@testing-library/react";
import Header from ".";
import { ThemeWrapper } from "../../utils/themeProviderTests";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("Header component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Header />
      </ThemeWrapper>
    );
    expect(getByText("Cartão")).toBeInTheDocument();
    expect(getByText("Bancária")).toBeInTheDocument();
    expect(getByText("Conciliações realizadas")).toBeInTheDocument();
  });
});
