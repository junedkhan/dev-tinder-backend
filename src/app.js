const express = require("express");
const { connectDB } = require("./config/database.js");

const User = require("./models/user.js");


const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {

    // Creating a instance of user model
    const user = new User(req.body);
    try {
        await user.save();
        res.send("User Added Successfully");
    } catch(err) {
        res.status(400).send("Error in saving user " + err.message);
    }
    // res.send("checking body");
})



const PORT = 3000;

connectDB().then(() => {
    console.log("Database connection is established.");
    app.listen(PORT, () => {
        console.log("Successfully running on port : " + PORT);
    });
}).catch((err) => {
    console.log("Database cannot connected.");
})

