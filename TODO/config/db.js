const mongoose = require("mongoose")

const databaseConnect = async() =>{
    await mongoose.connect("mongodb+srv://deep888gohil:TODO@cluster0.mmpin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("database connected succesfully");   
}

module.exports = databaseConnect;