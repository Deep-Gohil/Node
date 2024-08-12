const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect("mongodb+srv://deep888gohil:blog@cluster0.49pxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to MongoDB");

}

module.exports =dbConnect