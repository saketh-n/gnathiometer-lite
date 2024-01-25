import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./App";

describe("App Component", () => {
  it("renders Home component for root route", () => {
    render(<App useTestRouter={true} initialEntries={["/"]} />);
    expect(screen.getByText("Measure Growth")).toBeInTheDocument();
  });

  it("renders UploadGrowth component for /upload-growth route", () => {
    render(<App useTestRouter={true} initialEntries={["/upload-growth"]} />);
    expect(screen.getByText(/Upload/)).toBeInTheDocument();
  });
});
