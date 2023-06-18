import React, { useEffect, useState } from 'react'

function HomePage() {
    const [data,setData]=useState([]);

    const fectdata=async()=>{
        const res=await fetch("/api/todos")
        const data=await res.json()

        if(data.status==="succsecs")setData(data.data.todos)
        console.log(data);
    }

    useEffect(()=>{
        fectdata()
    },[])
  return (
    <div>HomePage</div>
  )
}

export default HomePage