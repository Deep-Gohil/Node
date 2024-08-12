
const { Router } = require("express")
// const { getTask, findById, createTask, updateTask, deleteTask, findTaskByUserId } = require("../controllers/Task.controller")
const { createBlog, getBlog,findById, deleteBlog, updateBlog, findBlogByUserId } = require("../controllers/Blog.controller")

// const taskRoute = Router()

// taskRoute.get("/", getTask)
// taskRoute.get("/:id", findById)
// taskRoute.post("/", createTask)
// taskRoute.patch("/:id", updateTask)
// taskRoute.delete("/:id", deleteTask)
// taskRoute.get("/user/:userId",findTaskByUserId)

// module.exports = taskRoute

const blogRoute = Router()

blogRoute.get("/",getBlog)
blogRoute.get("/",findById)
blogRoute.post("/", createBlog)
blogRoute.patch("/:id",updateBlog)
blogRoute.delete("/:id", deleteBlog)
blogRoute.get("/user/:userId",findBlogByUserId)

module.exports = blogRoute