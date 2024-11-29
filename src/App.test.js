// App.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }) => children,
  useAuth0: () => ({
    isLoading: false,
  }),
}));

describe("<App /> Integration Test", () => {
  test("renders navigation, header, and toggles the AddTask form", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Assert Navigation links are rendered
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    // Assert Header button is present
    const addButton = screen.getByRole("button", { name: /Add Task/i });
    expect(addButton).toBeInTheDocument();

    // Assert AddTask form is NOT visible initially
    const formInput = screen.queryByPlaceholderText("Enter a task");
    expect(formInput).not.toBeInTheDocument();

    // Click "Add Task" button
    await userEvent.click(addButton);

    // Assert AddTask form becomes visible
    const formInputVisible = screen.getByPlaceholderText("Enter a task");
    expect(formInputVisible).toBeInTheDocument();

    // Click "Close" button
    const closeButton = screen.getByRole("button", { name: /Close/i });
    await userEvent.click(closeButton);

    // Assert AddTask form is hidden again
    const formInputHidden = screen.queryByPlaceholderText("Enter a task");
    expect(formInputHidden).not.toBeInTheDocument();
  });
});
