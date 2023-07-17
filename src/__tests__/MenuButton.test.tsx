import { fireEvent, render } from "@testing-library/react";
import MenuButton from "../components/MenuButton";

describe("Menu Button", () => {
  test("renders without error", () => {
    render(<MenuButton />);
  });

  test("clicking the button calls showAlert function", () => {
    const { getByRole } = render(<MenuButton />);
    const button = getByRole("button");

    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.click(button);

    expect(mockAlert).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith(
      "this component was created just to demonstrate the usage of a client component within a next.js 13 environment"
    );

    mockAlert.mockRestore();
  });
});
