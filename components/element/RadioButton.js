import React from 'react'

function RadioButton({value,title,status,setStatus,children}) {
  return (
    <div>
        <div className='todo flex items-center'>
            {children}
            {title}
            <label htmlFor={value}> 
                {value}
            </label>
            <input type='radio' id={value} value={value} checked={status===value} onChange={(e)=>setStatus(e.target.value)}/>
            </div>
    </div>
  )
}

export default RadioButton