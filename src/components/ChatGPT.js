import '../gpt.css';
import { useState } from 'react'


function ChatGPT() {
  //add state for input and chat log
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Welcome to AGORA. Please ask me anything!"
  }]);

  //clear chats
  function clearChat() {
    setChatLog([]);
  }


  async function handleSubmit(e) {

    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }]
    setInput("")
    setChatLog(chatLogNew)

    // fetch response to the api combining the chat log array of message 
    const messages = chatLogNew.map((message) => message.message).join("\n")
    const response = await fetch("http://localhost:8000/chatgpt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    })
    const data = await response.json()
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }])
    console.log(data.message)
    console.log(chatLog)
  }

  return (

    <div className="App">

                {/* <img className="chatImag" src="https://cdn-icons-png.flaticon.com/512/3649/3649460.png" alt="CJ" width="80" height="80" /> */}

      <section className="chatbox">
        <div className="menu-button" onClick={clearChat}>
          <span>+</span>
          New Chat
        </div>

        <div className="chat-log">
          {chatLog.map((message, index) => (
            <Chatmessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} rows="1" className="chat-input-textarea" placeholder="Type your messsage here"></input>
          </form>
        </div>
      </section>
      <br />
    </div>
  );
}


const Chatmessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        </div>
        <div className="message">
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default ChatGPT;

