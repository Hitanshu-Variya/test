import express from "express";
import authrouter from '../routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.use("/auth", authrouter);

app.listen(PORT, () => {
    console.log("Server Started!");
})