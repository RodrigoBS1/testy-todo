import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInputField from "./TodoInputField"

const TodoList = () => {
    const [tasks, setTasks] = useState(["Scoop litter", "Steam faucet"]);

    const handleAddTask = task => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    const handleRemoveTask = task => {
        setTasks(prevTasks => prevTasks.filter(prevTask => prevTask !== task))
    }

    return (
        <>
        <TodoInputField onAddTask={handleAddTask} />
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <TodoItem task={task} onRemoveTask={handleRemoveTask} />
                </li>
            ))}
        </ul>
            </>
    );
};
export default TodoList;