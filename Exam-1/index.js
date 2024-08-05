const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./routes/user.route");
// const taskRouter = require("./routes/task.route");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("working ");
});

app.use("/user", userRouter);

// app.use("/task", taskRouter);

app.listen(8080, () => {
    console.log("listening port 8080");
    dbConnect();
});
