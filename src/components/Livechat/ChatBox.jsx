import React from 'react'
import '../../assets/style/ChatBox.css' // Buat file CSS terpisah untuk styling

const ChatBox = ({ closeChat }) => {
  return (
    <div className='chat-box'>
      <div className='chat-box-header'>
        <h5>Chat</h5>
        <button className='btn btn-close' onClick={closeChat}></button>
      </div>
      <div className='chat-box-body'>
        {/* Konten chat box */}
        <p>Selamat datang di fitur chat kami!</p>
      </div>
      <div className='chat-box-footer'>
        <input
          type='text'
          className='form-control'
          placeholder='Ketik pesan...'
        />
        <button className='btn btn-primary mt-2'>Kirim</button>
      </div>
    </div>
  )
}

export default ChatBox
