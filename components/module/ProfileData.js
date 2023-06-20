import React from 'react'

function ProfileData({profile}) {
    console.log(profile)
    
  return (
    <div className="Profile-data">
        <div>
            <span>Name</span>
            <p>{profile.name}</p>
        </div>
    </div>
  )
}

export default ProfileData