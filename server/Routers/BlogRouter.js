const express = require('express')
const router = express.Router()
const {
    CreateBlog,
    GetAllBlogs,
    UpdateBlog,
    DeleteBlog
} = require('../Controllers/BlogController')


router.post('/blog', CreateBlog)
router.get('/blogs', GetAllBlogs)
router.put('/Blog/:id', UpdateBlog)
router.delete('DBlog/:id', DeleteBlog)


module.exports = router;