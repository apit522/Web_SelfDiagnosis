// src/ChatIcon.js
import React, { useState } from 'react'
import '../../assets/style/ChatIcon.css' // Buat file CSS terpisah untuk styling
import '../../assets/style/ChatBox.css' // Buat file CSS terpisah untuk styling
import ChatBox from '../Livechat/ChatBox' // Buat file CSS terpisah untuk styling
import IconChat from '../../assets/img/icon/chat.png'

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
