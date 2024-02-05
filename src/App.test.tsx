import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App Component", () => {
  it("renders Home component for root route", () => {
    render(<App useTestRouter={true} initialEntries={["/"]} />);
    expect(screen.getByTestId("measure-growth")).toBeInTheDocument();
  });

  it("renders UploadGrowth component for /upload-growth route", () => {
    render(<App useTestRouter={true} initialEntries={["/upload-growth"]} />);
    expect(screen.getByTestId("upload-image")).toBeInTheDocument();
  });

  it("renders MeasureGrowth component for /measure-growth route", () => {
    render(<App useTestRouter={true} initialEntries={["/measure-growth"]} />);
    expect(screen.getByTestId("re-upload-button")).toBeInTheDocument();
  });
});
