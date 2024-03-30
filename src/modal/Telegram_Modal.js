import { useState } from 'react';
import useModal from './useModal';
import PhoneMassage233 from '../image/svg/PhoneMassage233.svg';
import React from 'react';
import './Modal.css';
import Mail from '../Mail';

const clouse = () => {
  window.location.reload();
}

function Telegram_Modal() {
  const [isBigWindowOpen, setIsBigWindowOpen] = useState(false);
  let teg = "message";

  const handleSmallWindowClick = () => {
    setIsBigWindowOpen(!isBigWindowOpen);
  };
  if (isBigWindowOpen === false) {

  }


  return (
    <div>
      <div className={teg} onClick={handleSmallWindowClick}>
        <img className='img-massage' src={PhoneMassage233} width={80} alt='massage'/>
      </div>

      {isBigWindowOpen && (
        <div className="message_1">
          <div className="butt_exsit" onClick={clouse}>&#215;</div>
          <Mail />
        </div>
      )}
    </div>

  );
}

export default Telegram_Modal;