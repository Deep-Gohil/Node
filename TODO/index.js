const express = require('express');
const databaseConnect = require('./config/db');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
const PORT = 8080

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get("/",(req,res)=>{
    res.send("Default Get Request")
})

app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log("Listening On port " + PORT);
    databaseConnect()
})