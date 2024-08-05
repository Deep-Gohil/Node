const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    taskname: String,
    description: String,
    status: String,
})
let task = mongoose.model("task", taskSchema)
module.exports = task