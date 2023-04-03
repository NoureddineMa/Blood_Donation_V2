const asyncHandler = require('express-async-handler')
const Blog = require('../Models/BlogModel')

//@Desc POST SINGLE BLOG
//@Route POST /Blog
//@Acces Private
const CreateBlog = asyncHandler(async(req,res) => {
    const {
        Image , Title , Date , Content
    } = req.body;
    if(!Image || !Title || !Date || !Content){
        res.status(400)
        .json({message: "please fill all fields "})
    }
    
    // create blog :    
    const BlogRequest = await Blog.create({
        Image,Title,Date,Content
    })
    
    BlogRequest ? res.status(200).json({message: "Blog created Successfully !"})
    : res.status(400).json({message: "ERROR , please try Again !!"})
})



//@Desc GET ALL BLOGS
//@Route POST /Blogs
//@Acces Private
const GetAllBlogs = asyncHandler(async(req,res) => {
    const getBlogs = await Blog.find({});
    getBlogs ? res.status(200).json(getBlogs) : res.status(400)
})



//@Desc PUT SINGLE BLOG
//@Route POST /PBlog/:id
//@Acces Private
const UpdateBlog = asyncHandler(async(req,res) => {
    const {Image, Title,Date,Content} = req.body;
    const _id = req.params.id

    if(!Image || !Title || !Date || !Content){
        res.status(400)
        .json({message: "Please fill all fields"})
    }

    const checkBlogAndUpdate = await Blog.findOneAndUpdate({_id} , {
        Image,
        Title,
        Date,
        Content
    })
    checkBlogAndUpdate ? res.status(200).json({message:"Blog Updated Successfully"})
    : res.status(400).json({message: "Error please try later ! thank you"})
})


//@Desc DELETE SINGLE BLOG
//@Route DELETE /BBlog/:id
//@Acces Private
const DeleteBlog = asyncHandler(async(req,res) => {
    const {id} = req.params
    const CheckBlogAndDelete = await Blog.findOneAndDelete({id})
    CheckBlogAndDelete ? res.status(200).json({message: "Blog Deleted Successfully !"})
    : res.status(400).json({message: "Error Try Again .. ! thank you"})
})


module.exports = {
    CreateBlog,
    GetAllBlogs,
    UpdateBlog,
    DeleteBlog
}