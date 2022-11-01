import { render } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/Card",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Cartão</a>
      </ActiveLink>
    );
    expect(getByText("Cartão")).toBeInTheDocument();
  });
  it("adds active class if the link is active", () => {
    const { getByText } = render(
      <ActiveLink href="/Card" activeClassName="active">
        <a>Cartão</a>
      </ActiveLink>
    );
    expect(getByText("Cartão")).toHaveClass("active");
  });
});
