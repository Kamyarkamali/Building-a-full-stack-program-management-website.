import React from 'react'
import {RiMastodonLine} from "react-icons/ri"

function Task({data,fectdata,back,next}) {

    const changeStatus=async(id,status)=>{
        const res=await fetch("/api/todos",{
            method:"PATCH",
            body:JSON.stringify({id,status}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        if(data.status==="succsecs") fectdata()
    }

  return (
    <div className='flex flex-col items-center'>
        {data?.map((item)=>(
            <div key={item._id} className='tasks__card flex items-center'> 
                <span className={item.status}></span>
                <RiMastodonLine/>
                <h4>{item.title}</h4>
                <div className='flex justify-between w-full'> 
                {
                    back ? (<button className='button-back h-[20px] text-sm' onClick={()=>changeStatus(item._id,back)}>Back</button>) : null
                }
                {
                    next ? (<button className='button-back h-[20px] text-sm'onClick={()=>changeStatus(item._id,next)}>Next</button>) : null
                }
                </div>
            </div>
        ))}
    </div>
  )
}

export default Task