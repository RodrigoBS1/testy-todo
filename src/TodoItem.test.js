import { render, screen } from "@testing-library/react"
import TodoItem from "./TodoItem"

describe("The Todo Item component", () => {
    test("renders the task's name and a button to delete the task", () => {
        const exampleTask = "Steam grout in bathroom"

        render(<TodoItem task={exampleTask} />)

        const taskElement = screen.getByText(exampleTask);
        const buttonElement = screen.getByRole('button', { name: /Delete/i });

        expect(taskElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
})