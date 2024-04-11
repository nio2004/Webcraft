import React from 'react'

const Profile = ({ imageUrl, profileUrl }) => {
  return (
    <div className='ml-4 w-[155px] h-[125px]'>
      {/* Image */}
      <a href={profileUrl} className=''>
        <img src={imageUrl} className='w-full h-full object-cover rounded-[100px] hover:shadow-black-100 shadow-md' alt="Profile" />
      </a>
    </div>
  )
}

export default Profile