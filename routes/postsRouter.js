const express = require('express')
const router = express.Router()

const postsControlller = require('../controllers/posts.controller')
router.get('/',postsControlller.getAll)
router.get('/:id',postsControlller.getById)
router.post('/',postsControlller.create)
router.put("/:id",postsControlller.update)
router.delete("/:id",postsControlller.delete)

module.exports = router