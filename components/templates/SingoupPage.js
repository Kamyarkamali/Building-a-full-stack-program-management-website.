import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function SingoupPage() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const router=useRouter()

  const {status}=useSession()


  useEffect(()=>{
    if(status==="authenticated") router.replace("/")
  },[status])
  ///Function connect to api

  const singoupHandeler=async()=>{
    const res=await fetch("/api/auth/singup",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{"Content-Type":"application/json"}
    })
    const data=await res.json()
    console.log(data)
    if(data.status==="succses") router.push("/SingIn")
  }

  return (
    <div className='signin-form'>
      <h3>Registeration Form</h3>

      <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='Password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={singoupHandeler}>Register</button>

      <div>
        <p>Have an account?</p>
        <Link href={"/SingIn"}>Sing in</Link>
      </div>
    </div>
  )
}

export default SingoupPage