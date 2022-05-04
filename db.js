import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );
}

export {connectDB};