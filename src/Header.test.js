// Header.test.js
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header /> Component", () => {
  test("renders the heading and button text when showForm is true", () => {
    render(<Header name="Task Manager" showForm={true} />);

    const heading = screen.getByRole("heading", { name: "Task Manager" });
    expect(heading).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();

    const addTaskButton = screen.queryByRole("button", { name: "Add Task" });
    expect(addTaskButton).not.toBeInTheDocument();
  });

  test("renders the heading and button text when showForm is false", () => {
    render(<Header name="Task Manager" showForm={false} />);

    const heading = screen.getByRole("heading", { name: "Task Manager" });
    expect(heading).toBeInTheDocument();

    const addTaskButton = screen.getByRole("button", { name: "Add Task" });
    expect(addTaskButton).toBeInTheDocument();

    const closeButton = screen.queryByRole("button", { name: "Close" });
    expect(closeButton).not.toBeInTheDocument();
  });
});
