import User from "@/models/User"
import connectionToDB from "@/utils/connectionDB"

import { hashPassword } from "@/utils/auth"

export default async function handler(req,res){
    if(req.method!=="POST") return

    try{
       await connectionToDB()
       res.status(201).json({status:"succses",message:"connection to DB"})
    }catch(err){
        console.log("erro to connection")
        res.status(500).json({status:"failed",message:"problem to coonection to Db"})
    }

    const {password,email}=req.body

    if(!password || !email){
        return res.status(401).json({status:"failed",message:"can not search email or password"})
    }

    const existing=await User.findOne({email:email})

    if(existing){
        return res.status(401).json({status:"failed",message:"allredy your account"})
    }

    const hashPassworded=await hashPassword(password)

    const newUser=await User.create({email:email,password:hashPassworded})

    console.log(newUser)

    res.status(201).json({status:"succses",message:"created data"})
}