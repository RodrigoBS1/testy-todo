/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import TodoItem from "./TodoItem"

describe("The Todo Item Component", () => {
    test("render the task's name and a butto to delete the task", () => {
        const exampleTask = "Steam grout in bathroom";

        render(<TodoItem task={exampleTask}/>)

        const taskElement = screen.getByText(exampleTask)
        const buttonElement = screen.getByRole('button', {name:/Delete/i});
        screen.debug();
        expect(taskElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()

    })
})