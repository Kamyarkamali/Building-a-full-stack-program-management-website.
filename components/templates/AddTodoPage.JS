import React, { useState } from 'react'
import RadioButton from '../element/RadioButton'

///React-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {
    const [title,setTitle]=useState("")
    const [status,setStatus]=useState("todo")

    const sendHandeler=async()=>{
        const res=await fetch("/api/todos",{
            method:"POST",
            body:JSON.stringify({status,title}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        console.log(data)
        if(data.status==="succsecs"){
            setTitle('')
            setStatus("todo")
            toast.success("add")
        }
    }

  return (
    <div className='add-form'>
        <h2>Add New Todo</h2>
        <div className='add-form__input'>
        <div className='add-form--frist'>
            <label htmlFor='title'>Title</label>
            <input id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <RadioButton status={status} setStatus={setStatus} value="todo" title="Todo"/>
        <RadioButton status={status} setStatus={setStatus} value="inProgress" title="In Progress"/>
        <RadioButton status={status} setStatus={setStatus} value="review" title="Review"/>
        <RadioButton status={status} setStatus={setStatus} value="done" title="Done"/>
        <button onClick={sendHandeler}>Send</button>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddTodoPage