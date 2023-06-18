import User from "@/models/User";

import connectionToDB from "@/utils/connectionDB";

import { getSession } from "next-auth/react";

export default async function handler(req,res){
    try{
        await connectionToDB()
        res.status(201).json({status:"succses",message:"conection to DB"})
    } catch(err){
        console.log(err)
        res.status(500).json({status:"failed",message:"problem to connection"})
    }

    const session=await getSession({req})

    if(!session){
        return res.status(401).json({status:"failed",message:"you are not logged account"})
    }

    const user=await User.findOne({email:session.user.email})

    if(!user){
        return res.status(401).json({status:"failed",message:"user is not exsits"})
    }

    if(req.method==="POST"){
        const {title,status}=req.body;

        if(!title || !status){
            return res.status(401).json({status:"failed",message:"invalid data"})
        }

        user.todos.push({title,status})
        user.save()

        res.status(201).json({status:"succses",message:"created todos"})
    }
}