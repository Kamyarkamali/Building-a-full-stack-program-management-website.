import NextAuth from 'next-auth'

import CredentialsProvider  from "next-auth/providers/credentials";

import User from "@/models/User";

import { verifyPassword } from "@/utils/auth";

import connectionToDB from "@/utils/connectionDB";


const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                const {email,password}=credentials

                try{
                    connectionToDB()
                } catch(err){
                    throw new Error("can not connection to DB")
                }

                if(!email || !password){
                    throw new Error("invalid data")
                }

                const user=await User.findOne({email:email})

                if(!user) throw new Error("User dosent exist")

                const isValid=await verifyPassword(password.user.password)

                if(!isValid) throw new Error("Erro is not valid email or password")

                return {email}
            }
        })
    ]
}

export default NextAuth(authOptions)