const mongoose = require('mongoose');
const DBconnect = async() =>{
    await mongoose.connect('mongodb+srv://deep888gohil:blog@cluster0.49pxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Server Connected To MongoDB");
}

module.exports = DBconnect;