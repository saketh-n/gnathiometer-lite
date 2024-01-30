import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ImageNotFound } from "./ImageNotFound";

describe("ImageNotFound Component Tests", () => {
  const routePath = "/re-upload";

  it("renders the SubmitImage component with correct props", () => {
    render(
      <MemoryRouter>
        <ImageNotFound route={routePath} />
      </MemoryRouter>
    );
    const reUploadButton = screen.getByText(/re-upload image ⬆️/i);
    expect(reUploadButton).toBeInTheDocument();
  });
});
