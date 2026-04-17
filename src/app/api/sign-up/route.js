import dbConnect from "@/lib/database"
import User from "@/models/Users"
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    const { username, email, password } = await req.json()
    try{
        await dbConnect()

        // check if the user already exists
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return Response.json({  message: "User already exists" }, { status: 400 })
        }

        // hash the user password before storing in the database
        const salt= bcrypt.genSaltSync(16)
        const hashedPassword= bcrypt.hashSync(password, salt)

        // store user details in the database
        const newUser=await User.create({
            name:username,
            email,
            password:hashedPassword
        })

        return Response.json({ message: "User created successfully" }, { status: 201 })

    }
    catch(error){
        console.error("Error in sign-up API:", error)
        return Response.json({ message: "Internal Server Error" }, { status: 500 })
    }
}