const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
    res.send("Hello Hello!");
})

app.use("/test", (req, res) => {
    res.send("Hello from server!")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Successfully running on port : " + PORT);
});
