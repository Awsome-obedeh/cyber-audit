
import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL)
        if (db) {
            console.log("Database connected successfully")
            return db
        }
        else {
            console.log("Database connection failed")
        }
    }
    catch (err) {
        console.error("Database connection error:", err)
    }

}

export default dbConnect