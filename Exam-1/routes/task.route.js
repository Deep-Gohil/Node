const { Router } = require("express")
const { getTask, createTask } = require("../controllers/task.controller")
const taskRouter = Router()
taskRouter.get("/task",getUser)
taskRouter.post("/task",createUser)

module.exports=taskRouter
