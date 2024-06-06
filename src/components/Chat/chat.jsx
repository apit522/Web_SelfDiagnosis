import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import botPic from "../../assets/img/icon/chat.png";

const ChatMessage = ({ msg }) => {
  return (
    <div
      className={`message ${msg.user === "user" ? "text-end" : "text-start"}`}
    >
      {msg.user === "user" ? (
        <i
          className="bi bi-person-circle me-2"
          style={{ fontSize: "40px" }}
        ></i>
      ) : (
        <img
          src={botPic}
          alt="Bot"
          className="img-fluid me-2"
          style={{ width: "60px" }}
        />
      )}
      <div
        className={`bg-${
          msg.user === "user" ? "success" : "primary"
        } text-white rounded p-2 mb-2 d-inline-block`}
      >
        {msg.text}
      </div>
      <div className="message-info">
        <span className="timestamp">{new Date().toLocaleTimeString()}</span>
        {msg.user === "user" ? (
          <span className="status text-primary"> Send</span>
        ) : (
          <span className="status text-success"> Receive</span>
        )}
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { user: "user", text: input };
      setMessages([...messages, newMessage]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { user: "bot", text: ` ${input}` }
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="home container-fluid p-0">
      <Navbar />
      <div className="container-fluid navbar-content">
        <div className="card-group">
          <div className="card border-1 mb-3" style={{ maxWidth: "35%" }}>
            <div className="card-header">
              <h3>Chat List</h3>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title">
                <img
                  src={botPic}
                  alt=""
                  className="w-25 rounded-5 img-fluid"
                  style={{ maxWidth: "60px" }}
                />
                ChatBot
              </h5>
              <p className="card-text">{/* // TODO last chat terakhir */}</p>
            </div>
          </div>
          <div className="card border-1 mb-3" style={{ maxWidth: "65%" }}>
            <div className="card-header">
              <h3>
                <img
                  src={botPic}
                  alt=""
                  className="w-25 rounded-5 img-fluid"
                  style={{ maxWidth: "60px" }}
                />
                ChatBot
                <small className="text-success"> Online</small>
              </h3>
            </div>
            <div className="card-body">
              <div className="message text-start">
                <img
                  src={botPic}
                  alt="Bot"
                  className="img-fluid me-2"
                  style={{ width: "60px" }}
                />
                <div className="bg-primary text-white rounded p-2 mb-2 d-inline-block">
                  Halo ada yang bisa dibantu?
                </div>
                <div className="message-info">
                  <span className="timestamp">
                    {new Date().toLocaleTimeString()}
                  </span>
                  <span className="status text-success"> Receive</span>
                </div>
              </div>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <ChatMessage key={index} msg={msg} />
                ))}
              </div>
              <div className="input-box d-flex align-items-center mt-auto">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="form-control me-2"
                />
                <button onClick={handleSend} className="btn btn-primary w-25">
                  Send <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
