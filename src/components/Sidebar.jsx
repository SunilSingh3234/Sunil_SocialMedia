import React from 'react'
import { assets, dummyUserData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'
import { CirclePlus, User } from 'lucide-react'

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {

    const navigate = useNavigate()
    const user = dummyUserData

  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 justify-between items-center max-sm:absolute top-0 z-20 bottom-0 flex flex-col
    ${sidebarOpen ? 'translate-x-0': 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
      <div className='w-full'>
        <img onClick={()=>navigate('/')} src={assets.logoo} className='w-26 ml-7 my-2 cursor-pointer' alt="" />
        <hr  className='border-gray-300 mb-8'/>
        <MenuItems setSidebarOpen={setSidebarOpen}/>
        <Link to='/create-post' className='items-center flex justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer'>
            <CirclePlus className='w-5 h-5'/>
            Create Post
        </Link>
      </div>
      <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
        <div className='flex gap-2 items-center cursor-pointer'>
            {/* add user button symbol */}
            <div>
              <h1 className='text-sm font-medium'>{user.full_name}</h1>
              <p className='text-xs text-gray-500'>@{user.username}</p>
            </div>
        </div>
        {/* add logout button */}
      </div>
    </div>
  )
}

export default Sidebar
