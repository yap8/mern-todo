import { ADD_TODO, DELETE_TODO, GET_TODOS } from "../actions/types"

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return [
        ...action.payload
      ]
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case DELETE_TODO:
      return [
        ...state.filter(todo => todo._id !== action.payload)
      ]
    default:
      return state
  }
}

export default todoReducer
