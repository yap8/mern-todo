import Todo from "./Todo"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos, deleteTodo } from '../state/actions/todoActions'

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          todo={ todo }
          key={ todo._id }
          deleteTodo={ () => dispatch(deleteTodo(todo._id)) }
        />
      ))}
    </ul>
  )
}

export default TodoList
