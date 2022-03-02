import { useEffect, useRef, useState } from "react";
import ContactCard from "./components/ContactCard";
import Message from "./components/Message";
import createMessage from "./utils/createMessage";
import useTheme from "./hooks/useTheme";
const data = [
  {
    userName: "Akshit Arora",
    imageUrl: "/profile-pic.jpeg",
    isOnline: true,
    isChatActive:true,
  }
];


function App() {
  const messagesEndRef = useRef(null);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [theme, toggleTheme] = useTheme();
  useEffect(() => {
    if (localStorage.getItem("messages")) {
      setMessages(JSON.parse(localStorage.getItem("messages")));
    }
  }, []);
  useEffect(() => {
    const fun = () => {
      messagesEndRef && messagesEndRef.current.scrollIntoView();
    };
    return () => {
      fun();
    };
  }, [messages]);
  function handleSubmit(e) {
    e.preventDefault();
    const message = e.target.message.value;
    const userMessage = createMessage(message, "user");
    const botMessage = createMessage(message, "bot");
    let tempMessages = [...messages];
    if (!message) return;
    tempMessages.push(userMessage, botMessage);
    setMessages((prevState) => [...prevState, userMessage]);
    setIsBotTyping(true);
    setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prevState) => [...prevState, botMessage]);
      localStorage.setItem("messages", JSON.stringify(tempMessages));
    }, 1000);

    e.target.reset();
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600'>
      <button className='hidden md:block absolute top-5 right-5' onClick={toggleTheme}>
        {theme === "dark" ? (
          <img src='https://img.icons8.com/color/48/000000/sun--v1.png' alt='light mode'/>
        ) : (
          <img src="https://img.icons8.com/external-dreamcreateicons-fill-lineal-dreamcreateicons/48/000000/external-moon-weather-dreamcreateicons-fill-lineal-dreamcreateicons-2.png" alt='dark-mode' />
        )}
      </button>
      <div className='h-[98vh] w-[98vw] md:h-[85vh] md:w-[85vw] bg-white/50 dark:bg-black/80 backdrop-blur-md shadow-lg px-8 lg:px-16 py-4 lg:py-8 flex rounded'>
        <div className='sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6'>
          <div className='search flex-2 py-4 px-2'>
            <input
              type='text'
              className='outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200 placeholder-white text-white'
              placeholder='Search'
            />
          </div>
          <div className='flex-1 h-full overflow-auto px-2'>
            {data.map((chat) => (
              <ContactCard {...chat} message={messages[messages.length-1]} />
            ))}
          </div>
        </div>
        <div className='chat-area flex-1 flex flex-col'>
          <div className='flex items-center gap-4 py-1 mb-3 border-b-2 border-gray-200'>
            <div className='w-12 h-12 relative'>
              <img
                className='w-12 h-12 rounded-full mx-auto'
                src='profile-pic.jpeg'
                alt='chat-user'
              />
              <span className='absolute w-4 h-4 animate-ping duration-1000 bg-green-400 rounded-full right-0 bottom-0'></span>
            </div>
            <h2 className='text-xl dark:text-gray-200'>
              <b>Mercedes Yemelyan</b>
            </h2>
          </div>
          <div className='messages flex-1 overflow-auto relative'>
            {messages.map((message) => (
              <Message {...message} />
            ))}

            {isBotTyping && (
              <div className='message mb-4 flex absolute'>
                <div className='flex-1 px-2'>
                  <div className='inline-block bg-gray-300 dark:bg-gray-900 rounded-full font-extrabold tracking-wider p-2 px-6 text-gray-700 dark:text-gray-300'>
                    <span className='tracking-wider animate-ping'>.</span>
                    <span className='tracking-wider animate-ping animation-delay-250'>
                      .
                    </span>
                    <span className='tracking-wider animate-ping animation-delay-500'>
                      .
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className='flex-2 py-4'>
            <div className='write bg-white dark:bg-gray-900 shadow flex rounded-lg'>
              <div className='flex-3 flex content-center items-center text-center p-4 pr-0'>
                <span className='block text-center text-gray-400 hover:text-gray-800'>
                  <svg
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    className='h-6 w-6'
                  >
                    <path d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                  </svg>
                </span>
              </div>
              <div className='flex-1'>
                <input
                  name='message'
                  className='w-full block outline-none dark:text-gray-200 py-4 px-4 bg-transparent'
                  type='text'
                  placeholder='Type a message...'
                  autofocus
                ></input>
              </div>
              <div className='flex-2 w-32 p-2 flex content-center items-center'>
                <div className='flex-1 text-center'>
                  <span className='text-gray-400 hover:text-gray-800'>
                    <span className='inline-block align-text-bottom'>
                      <svg
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        className='w-6 h-6'
                      >
                        <path d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div className='flex-1'>
                  <button
                    className='bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full inline-block'
                    type='submit'
                  >
                    <span className='inline-block align-text-bottom'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        className='w-4 h-4 text-white'
                      >
                        <path d='M5 13l4 4L19 7'></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
