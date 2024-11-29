// MockHeader.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockHeader from "./MockHeader";

describe("<Header />", () => {
  test("calls onAddClick when the button is clicked", async () => {
    // Create a mock function using jest.fn()
    const mockOnAddClick = jest.fn();

    // Render the component with the mock function
    render(
      <MockHeader
        name="Task Manager"
        showForm={false}
        onAddClick={mockOnAddClick}
      />
    );

    // Find the button
    const button = screen.getByRole("button", { name: /Add Task/i });

    // Simulate a user click on the button
    await userEvent.click(button);

    // Assert that the mock function is called
    expect(mockOnAddClick).toHaveBeenCalled();
  });
});
