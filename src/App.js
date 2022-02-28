import "./App.css";
import ContactCard from "./components/ContactCard";
const data = [
  {
    userName: "Akshit Arora",
    imageUrl: "/profile-pic.jpeg",
    isOnline: true,
    message:[ {
      id: 1,
      message: "how are you",
      timeStamp: new Date().toString(),
      sender: "Akshit Arora",
      receiver: "temp",
    }],
  },
  {
    userName: "Akshit Arora",
    imageUrl: "/profile-pic.jpeg",
    isOnline: true,
    message:[ {
      id: 1,
      message: "how are you",
      timeStamp: new Date().toString(),
      sender: "Akshit Arora",
      receiver: "temp",
    }],
  },
  {
    userName: "Akshit Arora",
    imageUrl: "/profile-pic.jpeg",
    isOnline: true,
    message:[ {
      id: 1,
      message: "how are you",
      timeStamp: new Date().toString(),
      sender: "Akshit Arora",
      receiver: "temp",
    }],
  },
  {
    userName: "Akshit Arora",
    imageUrl: "/profile-pic.jpeg",
    isOnline: true,
    message:[ {
      id: 1,
      message: "how are you",
      timeStamp: new Date().toString(),
      sender: "Akshit Arora",
      receiver: "temp",
    }],
  },
];
function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600'>
      <div className='h-[95vh] w-[95vw] bg-white/50 backdrop-blur-md shadow-lg p-16 rounded-2xl'>
        <div className='sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6'>
          <div className='search flex-2 pb-6 px-2'>
            <input
              type='text'
              className='outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200 placeholder-white text-white'
              placeholder='Search'
            />
          </div>
          <div className='flex-1 h-full overflow-auto px-2'>
            {data.map((chat) => (
              <ContactCard {...chat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
