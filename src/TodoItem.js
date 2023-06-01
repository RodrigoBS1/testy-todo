const TodoItem = ({ task }) => {
  return (
      <article>
          <span>{ task }</span>
          <button>Delete</button>
      </article>
  )
}

export default TodoItem;