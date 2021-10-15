const Todo = ({ todo, deleteTodo }) => {
  return (
    <li>
      <h4>{ todo.text }</h4>
      <button onClick={ deleteTodo }>&times;</button>
    </li>
  )
}

export default Todo
