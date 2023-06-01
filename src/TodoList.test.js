import { fireEvent, render, screen, within } from "@testing-library/react";
import TodoList from "./TodoList";

describe("The Todo list component", () => {
    test("renders a list of tasks", () => {
        render(<TodoList />);

        const listElement = screen.getByRole("list");
        const listItems = within(listElement).getAllByRole("listitem");

        expect(listElement).toBeInTheDocument();
        expect(listItems.length).toBe(2);
    });

    test("adds a new task to todo list", () => {
        render(<TodoList />);

        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        );
        const buttonElement = screen.getByRole("button", {
            name: /Add to List/i,
        });

        fireEvent.change(inputElement, { target: { value: "Take out trash" } });
        fireEvent.click(buttonElement);

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(3);
    });

    test("removes a task from the list", () => {
        render(<TodoList />);

        const deleteButtonElement = screen.getByRole(
            "button",
            { name: /Delete/i }
        );

        fireEvent.click(deleteButtonElement)

        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(1)

        expect(screen.queryByText('Scoop litter')).not.toBeInTheDocument();
    });
});