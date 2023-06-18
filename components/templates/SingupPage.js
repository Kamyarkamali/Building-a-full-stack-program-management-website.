import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function SingupPage() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const router=useRouter()
    ///Send data to db
    const clickHandeler=async()=>{
        const res=await fetch("/api/auth/singup",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"},
        })
        const data=await res.json()
        console.log(data)

        if(data.status==="succes")router.replace("/singin")
    }

  return (
    <div className='signin-form'>
        <h2 className='text-2xl text-blue-700'>SingUp</h2>
        <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-blue-600 text-white font-bold' onClick={clickHandeler}>SingUp</button>
        <div className='flex gap-2'>
            <p className='text-[14px]'>you have Account ?</p>
            <Link href={"/singin"} className='text-[14px]'>SingIn</Link>
        </div>
    </div>
  )
}

export default SingupPage