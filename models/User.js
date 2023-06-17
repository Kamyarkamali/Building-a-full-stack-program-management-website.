import { Schema,model,models } from "mongoose";


const userSchema=Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:String,
    lastName:String,
    todos:[{title:String,status:String}],
    createAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    },
})

const User=models.User || model("user",userSchema)


export default User;