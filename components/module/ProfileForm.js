import React from 'react'

function ProfileForm({name,setName,password,setPassword,submitHandeler,lastname,setLastName}) {

  return (
    <>
        <div className='profile-form__input'>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor='lastname'>LastName</label>
                <input type='text' id='lastname' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={submitHandeler}>Send</button>
        </div>
    </>
  )
}

export default ProfileForm