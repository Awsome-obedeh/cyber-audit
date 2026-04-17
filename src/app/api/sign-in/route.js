import dbConnect from "@/lib/database"
import User from "@/models/Users"
import bcrypt from "bcryptjs"

export const POST=async (req)=>{
    try {
        // establish connection to database
        await dbConnect()
        // take in user data
        const {email, password}=await req.json()
        if(!email){
            return Response.json({message: "Email is required"}, {status: 400})
        }
        if(!password){
            return Response.json({message: "Password is required"}, {status: 400})
        }

        // check if user exist in db
        const user=await User.findOne({email})
       if(!user){
        return Response.json({message: "Invalid credentials"}, {status: 400})
       }
       const isMatch=bcrypt.compareSync(password,user.password)
       if(!isMatch){
        return Response.json({message: "Invalid credentials"}, {status: 400})
       }

       return Response.json({message: "User signed in successfully"}, {status: 200})

        

    }

    catch(err){
        console.error("SIGN IN ERROR :", err)
        return Response.json({message: "Server Error"}, {status: 500})
        
    }
}
      