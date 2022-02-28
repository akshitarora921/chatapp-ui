import React from 'react'
import { formatDate } from '../utils/formatDate'

function ContactCard({imageUrl, userName, message, unreadMessage, isOnline, isChatActive }) {
  return (
    <div className={`entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md ${isChatActive && 'border-l-4 border-red-500'}`}>
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
        <span className='text-gray-800'>{userName}</span>
      </div>
      <div>
        <small className='text-gray-600'>{message[0]?.message}</small>
      </div>
    </div>
    <div className='flex-2 text-right'>
      <div>
        <small className='text-gray-500'>{formatDate(message[0]?.timeStamp)}</small>
      </div>
      <div>
        <small className='text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block'>
          {message.length}
        </small>
      </div>
    </div>
  </div>
  )
}

export default ContactCard