import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders Feed component", () => {
    render(<App />);
    expect(screen.getByTestId("feed-title")).toBeInTheDocument();
  });
});
