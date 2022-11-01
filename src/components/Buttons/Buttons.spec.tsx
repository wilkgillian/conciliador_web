import { render, screen } from "@testing-library/react";
import StartButton from "./StartButton";
import { ThemeWrapper } from "../../utils/themeProviderTests";
import BackButton from "./BackButton";
import DownloadButton from "./DownloadButton";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("Buttons components", () => {
  it("Start button renders correctly", () => {
    render(
      <ThemeWrapper>
        <StartButton />
      </ThemeWrapper>
    );
    expect(screen.getByText("Começar")).toBeInTheDocument();
  });
  it("Download button renders correctly", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <DownloadButton />
      </ThemeWrapper>
    );
    expect(getByText("Download")).toBeInTheDocument();
  });
  it("Back button renders correctly", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <BackButton />
      </ThemeWrapper>
    );
    expect(getByText("Voltar")).toBeInTheDocument();
  });
});
