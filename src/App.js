import React, { useState, useEffect } from "react";
import "./App.css";
import ShowMessages from "./components/ShowMessages";

function App() {

  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Bart",
      text: "Welcome to CYF chat system!",
    },
  ]);

  const [endpoint, setEndpoint] = useState("messages")

  useEffect(() => {
    fetch(`https://gulnihal-node-challange-chat-server.glitch.me/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessages(data);
      });
  }, [endpoint]);

  const getAllMessages = () => {
    setEndpoint("/messages");
  };

  const bringLast10 = () => {
    setEndpoint("/messages/latest");
  }; 

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={bringLast10}>Last 10 messages</button>
      <button onClick={getAllMessages}>Show all messages</button>
      <ShowMessages messages={messages} />
    </div>
  );
}

export default App;
