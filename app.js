import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { User } from "./model.js"; 

const app = express();

app.use(express.json())

app.post("/register", async (req, res) => {
    console.log(req);
    const user = new User(req.body)
    await user.save()
    console.log(user);
    res.send(user)
})

app.listen(2222, async () => {
    await connectDB()
    console.log("listening to server");
})