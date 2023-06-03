import { render } from "@testing-library/react";
import Home from "../app/page";

// 변경사항 추적
it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
