import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      {/* {params.username} */}
      <div className="cover w-full bg-red-50 relative">
        <img className='object-cover w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=LkpujRxnu7OPaAiWTrnikegeIfkpv2vv6VVL3Wz7WLY%3D" alt="" />
        <div className='flex flex-col justify-center items-center'>
          <img className='w-40 h-40' src="/profile.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Username
