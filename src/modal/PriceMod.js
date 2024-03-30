import { useState } from 'react';
import useModal from './useModal';
import React from 'react';
import './Modal.css';
import '../Header/Header.css';
import price from './price.json';


function EnterMod() {
  const [data, setData] = useState(null);
  const { isModalOpen, openModal, closeModal, modalContent } = useModal();
  
  function handleButtonClick() {
    setData('example data');
    openModal(<Modal onClose={closeModal} data={data} />);
     // Вызывается функция из другого компонента
  }

  return ( 
    <div>
      <a  onClick={handleButtonClick}>&nbsp;Прайс</a>
      {isModalOpen && modalContent}
    </div>
  );
}

function Modal({ onClose, data }) {
  function handleConfirm() {
    console.log('Confirmed with data:', data);
    onClose();
  }

  return (
    <div className='Modal'>
      <div className='Enter-Modal'> 
    <h2>Прайс услуг</h2>
    <h2 className='Close' onClick={handleConfirm}>&#215;</h2>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>Услуга</th>
          <th>Авто</th>
          <th>Комментари</th>
          <th>Стоимость в руб.</th>
        </tr>
      </thead>
    <tbody>
    { price.map((price,i) => (
        <tr className="TextPrice" key={i}>
          
          <td>{price.title}&nbsp;&nbsp;</td>
          <td>{price.type}&nbsp;&nbsp;</td>
          <td>{price.comment}&nbsp;&nbsp;</td>
          <td>{price.price}</td>
          </tr>
        ))
      }
      </tbody>
      </table>
        
  
    
    </div>
    </div>
  );
}

export default EnterMod;