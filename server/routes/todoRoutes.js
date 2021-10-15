const router = require('express').Router()
const {
  todo_get,
  todo_post
} = require('../controllers/todoController')

router.get('/', todo_get)
router.post('/', todo_post)

module.exports = router
