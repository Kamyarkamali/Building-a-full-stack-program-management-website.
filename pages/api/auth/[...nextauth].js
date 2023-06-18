import connectDB from "@/utils/connectionDB";
import User from "@/models/User";
import NextAuth from "next-auth";
import { verifyPassword } from "@/utils/auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                const {email,password}=credentials;

                try{
                    await connectDB()
                }catch(err){
                    throw new Error("Error in connecting to DB!")
                }

                if(!email || !password){
                    throw new Error("Invalid data")
                }
                const user=await User.findOne({email:email})

                if(!user) throw new Error("User dosent exist!")

                const isValid=await verifyPassword(password,user.password)

                if(!isValid) throw new Error("UserName or password not valid")

                return {email}
            }
        })
    ]
}

export default NextAuth(authOptions)