const { Router } = require("express");
const { getUser, createUser, updateUser, deleteUser, getUserById, LoggedIn } = require("../controller/userSontroller");

const userRoute = Router()

userRoute.get("/",getUser)
userRoute.post("/",createUser)
userRoute.patch("/:id",updateUser)
userRoute.delete("/:id",deleteUser)
userRoute.get("/:id",getUserById)
userRoute.post("login",LoggedIn)

module.exports = userRoute;