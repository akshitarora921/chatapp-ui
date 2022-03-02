import { format } from "date-fns";
import React from "react";

function Message({ message, sender, timeStamp }) {
  if (sender === "bot") {
    return (
      <div className='message flex'>
        <div className='flex-col px-2 mb-4'>
          <div className='inline-block bg-gray-100 dark:bg-gray-900 rounded-full p-2 px-6 text-gray-700 dark:text-gray-200'>
            <span>{message}</span>
          </div>
          <div className='pl-4'>
            <small className='text-gray-500 text-xs'>
              {format(new Date(timeStamp), "hh:mm aaa")}
            </small>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='message me mb-4 flex text-right'>
      <div className='flex-1 px-2'>
        <div className='inline-block bg-blue-600 rounded-full p-2 px-6 text-white'>
          <span>{message}</span>
        </div>
        <div className='pr-4'>
          <small className='text-gray-500 text-xs'>
            {format(new Date(timeStamp), "hh:mm aaa")}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Message;
