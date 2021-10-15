import { ADD_TODO, DELETE_TODO, GET_TODOS } from "./types"

export const getTodos = () => dispatch => {
  fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
      dispatch({
        type: GET_TODOS,
        payload: todos
      })
    })
}

export const addTodo = text => dispatch => {
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
      dispatch({
        type: ADD_TODO,
        payload: newTodo
      })
    })
}

export const deleteTodo = _id => dispatch => {
  fetch(`/api/todos/${_id}`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch({
        type: DELETE_TODO,
        payload: _id
      })
    })
}
