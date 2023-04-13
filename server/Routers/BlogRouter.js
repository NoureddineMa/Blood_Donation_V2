const express = require('express')
const router = express.Router()
const {
    CreateBlog,
    GetAllBlogs,
    UpdateBlog,
    DeleteBlog
} = require('../Controllers/BlogController')
const {upload} = require('../Middlewares/ImageUpload')

router.post('/blog',CreateBlog)
router.get('/blogs', GetAllBlogs)
router.put('/Blog/:id', UpdateBlog)
router.delete('DBlog/:id', DeleteBlog)


module.exports = router;