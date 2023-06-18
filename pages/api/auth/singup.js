import connectDB from "@/utils/connectionDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export default async function handler(req,res){

    if(req.method!=="POST") return

    try{
        connectDB()
    }catch(err){
        console.log("problem to connection") 
        return res.status(500).json({status:"failed",message:"not conecction"})
    }

    const {email,password}=req.body

    if(!email || !password){
        return res.status(401).json({status:"failed",message:"you are not logged"})
    }

    const exsitUser=await User.findOne({email:email})

    if(exsitUser){
        return res.sttus(401).json({status:"failed",message:"you are loged alredy"})
    }

    const hashePassword=await hashPassword(password)

    const newUser=await User.create({email:email,password:hashePassword})

    console.log(newUser)

    res.status(201).json({status:"succes",message:"created data"})
}