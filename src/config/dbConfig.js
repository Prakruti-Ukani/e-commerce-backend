import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); 

const db=mongoose.connect(process.env.DATABASE_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

export default db;