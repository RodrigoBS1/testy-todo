import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInputField from "./TodoInputField";

const TodoList = ({ list }) => {
  const [tasks, setTasks] = useState(["Scoop litter", "Steam faucet"]);

  const handleAddTask = task => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  return (
    <>
      <TodoInputField onAddTask={handleAddTask}/>
      <ul>
        {tasks.map((task, index) => (
            
          <li key={index}>
            <TodoItem task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
