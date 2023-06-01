/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, within } from "@testing-library/react"
import TodoList from './TodoList'

describe("The Todo list component", () => {
    test("renders a list of task", () => {
        

        render(<TodoList />);

        const listElement = screen.getByRole('list')
        const listItem = within(listElement).getAllByRole('listitem')
        screen.debug()
        expect(listElement).toBeInTheDocument()
        expect(listItem.length).toBe(2)
    })

    test("adds a new task to todo list", () => {
        render(<TodoList />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', {name:/Add to List/i})
        screen.debug()
        fireEvent.change(inputElement, {target: {value: "Take put trash"}})
        fireEvent.click(buttonElement)

        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(3)

    })

    test("remove a task from the list", () => {
        render(<TodoList />);

        const firstTaskElement = screen.getByText("Scoop liter")
        const deleteButtonElement = within(firstTaskElement).getByRole('button', {name:/Delete/i})

        fireEvent.click(deleteButtonElement)

        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(1)

        expect(screen.queryAllByText('Scoop litter')).not.toBeInTheDocument();
    })

})