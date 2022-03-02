import { format } from 'date-fns'
import React from 'react'

function ContactCard({imageUrl, userName, message, isOnline, isChatActive }) {
  return (
    <div className={`entry cursor-pointer dark:bg-gray-900 dark:border-gray-900 transform hover:border-blue-500 border-white border-l-4 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md ${isChatActive && 'border-l-4 border-blue-500'}`}>
    <div className='flex-2'>
      <div className='w-12 h-12 relative'>
         <img
          className='w-12 h-12 rounded-full mx-auto'
          src={imageUrl}
          alt='chat-user'
        />
        <span className={`absolute w-4 h-4 rounded-full right-0 bottom-0 border-2 border-white ${isOnline?'bg-green-400':'bg-gray-400'}`}></span>
      </div>
    </div>
    <div className='flex-1 px-2'>
      <div className='truncate w-32'>
        <span className='text-gray-800 dark:text-gray-200'>{userName}</span>
      </div>
      <div>
        <small className='text-gray-600 dark:text-gray-200'>{message?.message}</small>
      </div>
    </div>
    <div className='flex-2 text-right'>
      <div>
        <small className='text-gray-500 dark:text-gray-200'>{message?.timeStamp && format(new Date(message.timeStamp),'dd MMMM')}</small>
      </div>
     
    </div>
  </div>
  )
}

export default ContactCard