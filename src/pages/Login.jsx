import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* bg-image */}
      <img src={assets.bgImage} className='absolute top-0 left-0 -z-1 w-full h-full object-cover' alt="" />
      {/* left section */}
      <div className='flex flex-1 flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={assets.logoo} alt="" className='h-30 object-contain'/>
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} className='h-8 md:h-10' alt="" />
            <div>
              <div className='flex'>
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>
                ))}
              </div>
              <p>Used by 10k+ developers</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>More than just friends truly connect</h1>
          <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>connect with global community on Sunil.</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* login form */}
      <div className='flex-1 flex items-center justify-center p-6 smr:p-10'></div>
    </div>
  )
}

export default Login
