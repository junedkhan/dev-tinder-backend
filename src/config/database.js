const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://junedkhan933:7xgdxX2FlDPK6aS6@devtinder.dgdxj.mongodb.net/devTinder");
}

module.exports = {
    connectDB
}