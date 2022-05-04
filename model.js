import mongoose from "mongoose";
import { stringify } from "querystring";

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model("User", userSchema)

export {User}