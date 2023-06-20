import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg"
import ProfileForm from '../module/ProfileForm'
import ProfileData from '../module/ProfileData'

function Profile() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [lastname,setLastName]=useState("")
    const [profile,setProfile]=useState(null)


    

  const submitHandeler=async()=>{
    const res=await fetch("/api/profile",{
      method:"POST",
      body:JSON.stringify({name,lastname,password}),
      headers:{"content-Type":"application/json"},
    })
    const data=await res.json()
    console.log(data);
  }

  console.log(profile)


  useEffect(()=>{
    fetchData()
  },[])

 
const fetchData=async()=>{
  const res=await fetch("/api/profile")
  const data=await res.json()

  if(data.status==="succses"){
    setProfile(data.data)
}
}


  return (
    <div className='profile-form'>
      <h2><CgProfile/></h2>

     
    {
      profile ? (
        "kamyar"
      ):(
        <>
        <ProfileForm name={name} lastname={lastname} setLastName={setLastName} setName={setName} password={password} setPassword={setPassword} submitHandeler={submitHandeler}/>
        </>
      )
    }

    </div>
  )
}

export default Profile