import React, { useState } from 'react'

//Icon
import {GrAddCircle} from "react-icons/gr"
import { FiSettings } from 'react-icons/fi'
import {AiOutlineFileSearch} from "react-icons/ai"
import { AiFillEdit } from 'react-icons/ai'
import { MdDoneAll } from "react-icons/md"

import RadioButton from '../element/RadioButton'


function AddTodoPage() {

    const [todo,setTodo]=useState("")
    const [status,setStatus]=useState("todo")

  return (
    <div className='add-form'>
        <div className='flex items-center'>
        <h1> Add New Todo</h1>
        <GrAddCircle/>
        </div>
        <div className='add-form__input'>
        <div className='add-form__input--first'>
            <label htmlFor='title'>Title</label>
            <input id='title' type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        </div>
        <div className='add-form__input--second'>
            <RadioButton value="value" status={status} setStatus={setStatus} title="Todo">
                <AiFillEdit/> 
            </RadioButton>

            <RadioButton value="inProgress" status={status} setStatus={setStatus} title="In Progress">
                <FiSettings/>
            </RadioButton>
            <RadioButton value="Review" status={status} setStatus={setStatus} title="review">
                <AiOutlineFileSearch/>
            </RadioButton>

            <RadioButton value="Done" status={status} setStatus={setStatus} title="done">
                <MdDoneAll/>
            </RadioButton>
        </div>
        <button>Add</button>
        </div>

    </div>
  )
}

export default AddTodoPage