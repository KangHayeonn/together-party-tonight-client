import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

// 렌더링 확인 테스트
describe("Home", () => {
  if (
    ("renders a heading",
    () => {
      render(<Home />);

      const heading = screen.getByRole("heading", {
        name: /welcome to next\.js!/i,
      });

      expect(heading).toBeInTheDocument();
    })
  );
});
