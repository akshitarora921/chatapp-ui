export default function createMessage(message,sender){
  return {
    id: Date.now(),
    message: message,
    sender: sender,
    timeStamp: Date().toString(),
  }
}