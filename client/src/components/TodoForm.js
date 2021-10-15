import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addTodo(text)

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
