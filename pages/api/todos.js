import User from "@/models/User"
import connectDB from "@/utils/connectionDB"
import { sortTodos } from "@/utils/sortTodos"
import { getSession } from "next-auth/react"

export default async function handler(req,res){
   
    try{
        connectDB()
    }catch(err){
        console.log("problem to connection") 
        return res.status(500).json({status:"failed",message:"not conecction"})
    }

    const sessions=await getSession({req})

    if(!sessions){
        return res.status(401).json({status:"failed",message:"not valid"})
    }

    const user=await User.findOne({email:sessions.user.email})

    if(!user){
        return res.status(401).json({status:"failed"})
    }

    if(req.method==="POST"){
        const {title,status}=req.body

        if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invaild data!" });
    }

        user.todos.push({title,status})
        user.save()
        console.log(title,status);
    }else if(req.method==="GET"){
        const Sordata=sortTodos(user.todos)
        res.status(201).json({status:"succsecs",data:{todos:Sordata}})
    } else if(req.method==="PATCH"){
        const {id,status}=req.body

        if(!id || !status){
            return res.status(401).json({status:"failed"})
        }

        const result=await User.updateOne({"todos._id":id},{$set:{"todos.$.status":status}})
        console.log(result)
        res.status(200).json({status:"succsecs"})
    }
    
    
    res.status(201).json({status:"succsecs",message:"todo created"})
}