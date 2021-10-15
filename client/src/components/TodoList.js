import Todo from "./Todo"

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          todo={ todo }
          key={ todo._id }
          deleteTodo={ deleteTodo }
        />
      ))}
    </ul>
  )
}

export default TodoList
