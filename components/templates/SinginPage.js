import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {signIn, useSession} from "next-auth/react"

function SingupPage() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const router=useRouter()
    const {status}=useSession()
    ///Send data to db
    const loginHandeler=async()=>{
          const res=await signIn("credentials",{
            email,
            password,
            redirect:false,
          })
          if(!res.error) router.push("/")
    }

    useEffect(()=>{
        if(status==="authenticated") router.replace("/")
    },[status])

  return (
    <div className='signin-form'>
        <h2 className='text-2xl text-blue-700'>Login</h2>
        <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-blue-600 text-white font-bold' onClick={loginHandeler}>Login</button>
        <div className='flex gap-2'>
            <p className='text-[14px]'>Are You Create acount?</p>
            <Link href={"/singup"} className='text-[14px]'>SingUp</Link>
        </div>
    </div>
  )
}

export default SingupPage