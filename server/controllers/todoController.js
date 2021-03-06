const Todo = require('../models/todo')

module.exports.todo_get = async (req, res) => {
  try {
    const result = await Todo.find()

    res.json(result)
  } catch (err) {
    res.json(err)
  }
}

module.exports.todo_post = async (req, res) => {
  const { text } = req.body
  
  try {
    const todo = await new Todo({
      text
    })

    const result = await todo.save()

    res.json(result)
  } catch (err) {
    res.json(err)
  }
}

module.exports.todo_delete = async (req, res) => {
  const { id } = req.params

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id)

    res.json(deletedTodo)
  } catch (err) {
    res.json(err)
  }
}
