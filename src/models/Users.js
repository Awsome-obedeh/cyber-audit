import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },

    gender:{
        type:String,
        enum:["M", "F"]
    }
} , {timestamps:true})

// next step is to create a model from the schema
// next js does not allow us to create multiple models with the same name
// it needs to check if the model already exists before creating a new one
const User=mongoose.models.user || mongoose.model('user', userSchema)

export default User

