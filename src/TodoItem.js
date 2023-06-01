const TodoItem = ({ task, onRemoveTask }) => {
  
  const handleRemoveTask = () => {
    onRemoveTask(task)
  }
  
  return (
      <article>
          <span>{ task }</span>
          <button onClick={handleRemoveTask}>Delete</button>
      </article>
  )
}

export default TodoItem;