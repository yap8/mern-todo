import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'todo 1' },
    { id: '2', text: 'todo 2' }
  ])

  const addTodo = text => {
    setTodos([
      ...todos,
      { id: text, text }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm addTodo={ addTodo } />
      <TodoList todos={ todos } deleteTodo={ deleteTodo } />
    </>
  )
}

export default App
