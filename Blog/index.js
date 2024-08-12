const PORT = 8080
const express = require('express');
const DBconnect = require('./config/db');
const cors=require('cors');
const userRouter = require('./routes/user.route');
let app = express();
app.use('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ msg: "node js error" })
})

app.use('/user',userRouter)

app.listen(PORT,()=>{
    console.log("Server listening on port " + PORT);
    DBconnect()
});