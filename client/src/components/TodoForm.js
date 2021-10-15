import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../state/actions/todoActions'

const TodoForm = () => {
  const dispatch = useDispatch(state => state.todos)

  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addTodo(text))

    setText('')
  }

  return (
    <form onSubmit={ e => handleSubmit(e) }>
      <input
        type="text"
        value={ text }
        onChange={ e => setText(e.target.value) }
      />
      <button type="submit">+</button>
    </form>
  )
}

export default TodoForm
