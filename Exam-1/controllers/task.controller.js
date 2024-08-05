const Task = require("../models/task.schema")

const getTask = async (req, res) => {

    let data = await Task.find()
    res.send(data)

}

const createTask = async (req, res) => {
    let data = await Task.create(req.body)
    res.status(201).send(data)
}


module.exports = { getTask,createTask}