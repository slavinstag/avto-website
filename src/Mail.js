import React, { useState } from 'react';
import './modal/Modal.css';


const Mail = () => {
  const [message, setMessage] = useState('');


  const botToken = '6328894082:AAG3S6o_TtsgLPWkp3DKN7WixnIjg7tjGT4';
  const chatId = '-4138437435';

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        alert('Сообщение успешно отправлено:', data);
        window.location.reload();
      })
      .catch(error => {
        console.error('Произошла ошибка при отправке сообщения,попробуйте позже', error);
      });
      
      
  };
  
  return (
    <div className='input' >
      <textarea className='input_1'
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder= "Задайте свой вопрос и не забудьте Указать модель,год вашего автомобиля и вашу локацию"
      />
      
      <button id="but_1" onClick={sendMessage}>Отправить</button>
      </div>
   
   
  );
};
export default Mail;