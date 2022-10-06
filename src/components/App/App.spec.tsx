import { describe, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.tsx", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render", async () => {
    await screen.getByText("Length:");
  });
});
