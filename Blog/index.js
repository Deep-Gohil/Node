
const express = require('express')
const dbConnect = require('./config/db')
const userRouter = require('./routes/user.route')
const taskRoute = require('./routes/Blog.route')
const cors=require('cors')
const blogRoute = require('./routes/Blog.route')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send({ msg: "node js error" })
})
app.use("/user", userRouter)
app.use("/blogs", blogRoute)
app.listen(8090, () => {
    console.log("listening  on port 8090");
    dbConnect()
})