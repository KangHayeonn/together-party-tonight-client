import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "@/components/SampleButton";

describe("Button component", () => {
  test("renders button with correct text", () => {
    const { container } = render(<Button text="Click me" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders disabled button", () => {
    const { container } = render(<Button text="Submit" disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders button with custom class", () => {
    const { container } = render(
      <Button text="Click me" className="custom-button" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
