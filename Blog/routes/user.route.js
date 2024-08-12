const { Router } = require("express")
const { createUser, LoggedIn } = require("../controllers/user.conttroler")

const userRouter = Router()
userRouter.post("/signup",createUser)
userRouter.post("/login",LoggedIn)

module.exports =userRouter  