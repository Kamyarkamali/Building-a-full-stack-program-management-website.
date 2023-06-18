import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function SinginPage() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const router=useRouter()

  ///Function connect to api

  const singinHandeler=async()=>{
    const res=await fetch("/api/auth/singup",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{"Content-Type":"application/json"}
    })
    const data=await res.json()
    console.log(data)
    if(data.status==="succses") router.push("/singin")
  }

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