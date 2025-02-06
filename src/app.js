const express = require("express");
const { connectDB } = require("./config/database.js");

const User = require("./models/user.js");


const app = express();

app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Virat",
        lastName: "Kohli",
        email: "viratkohli933@gmail.com",
        password: "kohli@123"
    }

    // Creating a instance of user model
    const user = new User(userObj);
    try {
        await user.save();
        res.send("User Added Successfully");
    } catch(err) {
        res.status(400).send("Error in saving user " + err.message);
    }
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

