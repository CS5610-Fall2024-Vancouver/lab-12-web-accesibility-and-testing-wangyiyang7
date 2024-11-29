// AddTask.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTask from "./AddTask";

describe("<AddTask /> Component", () => {
  test("updates input value as user types", async () => {
    render(<AddTask />);

    const input = screen.getByLabelText(/task/i);

    const userInput = "Buy groceries";
    await userEvent.type(input, userInput);

    expect(input.value).toBe(userInput);

    const displayedTask = screen.getByText(`Current task: ${userInput}`);
    expect(displayedTask).toBeInTheDocument();
  });
});
