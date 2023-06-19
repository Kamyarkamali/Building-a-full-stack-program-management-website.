import React, { useEffect, useState } from 'react'
import Task from '../module/Task';

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
    <div className='home-page'>
      <div className='home-page--todo'>
      <p>Todo</p>
      <Task data={data.todo} fectdata={fectdata} next="inProgress"/>
      </div>

      <div className='home-page--inProgress'>
      <p>in progres</p>
      <Task data={data.inProgress} fectdata={fectdata} next="review" back="todo"/>
      </div>

      <div className='home-page--review'>
      <p>review</p>
      <Task data={data.review} next="done" back="inProgress" fectdata={fectdata}/>
      </div>

      <div className='home-page--done'>
      <p>done</p>
      <Task data={data.done} fectdata={fectdata} back="review"/>
      </div>
    </div>
  )
}

export default HomePage