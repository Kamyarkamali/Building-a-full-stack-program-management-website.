import React from 'react'

function RadioButton({status,setStatus,value,title,children}) {
  return (
    <div className="flex items-center gap-2">
        <label htmlFor={value}>{title}</label>
        <input type='radio' id={value} value={value} checked={status===value} onChange={(e)=>setStatus(e.target.value)}/>
    </div>
  )
}

export default RadioButton