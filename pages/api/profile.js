import connectDB from "@/utils/connectionDB";
import User from "@/models/User";
import {getSession} from "next-auth/react"
import { verifyPassword } from "@/utils/auth";

export default async function hanlder(req,res){

    try{
        connectDB()
    }catch(err){
        console.log("problem to connection") 
        return res.status(500).json({status:"failed",message:"not conecction"})
    }

    const sessions=await getSession({req})

    if(!sessions){
       return res.status(401).json({status:"failed",message:"you are not logged"})
    }

    const user=await User.findOne({email:sessions.user.email})

    if(!user){
        return res.status(401).json({status:'failed',message:"you are data is not valid"})
    }

    if(req.method==="POST"){
        const {lastName,password,name}=req.body

        const isValid=await verifyPassword(password,user.password)

        if(!isValid){
            return res.status(401).json({status:"failde"})
        }
        user.name=name
        user.lastName=lastName
        user.save()

        res.status(200).json({message:'succses',data:{name,lastName,email:sessions.user.email},
    })
} else if (req.method === "GET") {
    res.status(200).json({
      status: "success",
      data: { name: user.name, lastName: user.lastName, email: user.email },
    })
}
}