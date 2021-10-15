import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  const addTodo = text => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        text
      })
    })
      .then(res => res.json())
      .then(newTodo => {
        setTodos([
          ...todos,
          newTodo
        ])
      })
  }

  const deleteTodo = _id => {
    fetch(`/api/todos/${_id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== _id))
      })
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
