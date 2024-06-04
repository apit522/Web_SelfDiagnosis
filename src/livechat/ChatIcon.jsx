// src/ChatIcon.js
import React, { useState } from 'react'
import './ChatIcon.css' // Buat file CSS terpisah untuk styling
import ChatBox from './ChatBox' // Impor ChatBox
import IconChat from '../img/chat.png'

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleIconClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  const closeChat = () => {
    setIsChatOpen(false)
  }

  return (
    <>
      <div className='chat-icon' onClick={handleIconClick}>
        <img src={IconChat} alt='Chat Icon' className='img-fluid' />
      </div>
      {isChatOpen && <ChatBox closeChat={closeChat} />}
    </>
  )
}

export default ChatIcon
