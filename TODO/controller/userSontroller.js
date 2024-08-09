const User = require("../models/user.schema");


const createUser = async (req, res) => {
    let { email } = req.body;
    console.log(req.body);

    let isUser = await User.findOne({ email: email });
    if (isUser) {
        res.send("User already exists")
    }
    else {
        let data = await User.create(req.body)
        res.send(data)
    }
}

const getUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const getUserById = async (req, res) => {
    let { id } = req.params
    let data = await User.findById(id)
    res.send(data)
}

const updateUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id)
    res.send(data)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    await User.findByIdAndDelete(id)
    res.send("User deleted successfully")
}

const LoggedIn = async (req, res) => {
    let { email, password } = req.body
    let isUser = await User.findOne({ email: email })
    console.log("isUser: " + isUser);
    if (!isUser) {
       return res.send({ message: "user not found" })
    }

    if (isUser.password !== password) {
     return   res.send({ message: "password is incorrect" })
    }

    res.send({ message: "logged in successfully",User: isUser })

}

module.exports = { createUser, getUser, updateUser, deleteUser, getUserById, LoggedIn }