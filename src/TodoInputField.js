import { useState } from "react";

const TodoInputField = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = event => {
        setInputValue(event.target.value)
    }

    const handleAddTask = () => {
        onAddTask(inputValue)
        setInputValue('')
    }

    return (
        <section>
            <input
                type="text"
                placeholder="Add a new task here..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add to List</button>
        </section>
    );
};

export default TodoInputField;
