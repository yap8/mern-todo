const router = require('express').Router()
const {
  todo_get,
  todo_post,
  todo_delete
} = require('../controllers/todoController')

router.get('/', todo_get)
router.post('/', todo_post)
router.delete('/:id', todo_delete)

module.exports = router
