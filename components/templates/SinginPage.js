import {signIn,useSession} from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function SinginPage() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const router=useRouter()

  const {status}=useSession()

  ///Function connect to api

  const singinHandeler=async()=>{
    const res=await signIn("credentials",{
        email,
        password,
        redirect:false
    })
    if(!res.error) router.push("/")
  }

  useEffect(()=>{
    if(status==="authenticated") router.replace("/")
  },[status])

  return (
    <div className='signin-form'>
      <h3>Login Form</h3>

      <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='Password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={singinHandeler}>Login</button>

      <div>
        <p>Have an Create Acounts?</p>
        <Link href={"/singoup"}>Sigoup in</Link>
      </div>
    </div>
  )
}

export default SinginPage