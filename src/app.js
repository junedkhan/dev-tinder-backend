const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Juned", lastName: "Khan" });
})

app.post("/user", (req, res) => {
    res.send("Data succesfully added!");
})

app.delete("/user", (req, res) => {
    res.send("Successfully deleted");
});

app.put("/user", (req, res) => {
    res.send("Data replaced succesfully!")
})

app.patch("/user", (req, res) => {
    res.send("Data updated succesfully!")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Successfully running on port : " + PORT);
});
