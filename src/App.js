import './normalize.css';
import React, { useState } from 'react';
import './App.css';
import Telegram_Modal from "./modal/Telegram_Modal";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";



function App() {
  const [expanded, setExpanded] = useState(false);
  const [expanded_1, setExpanded_1] = useState(false);
  const [expanded_2, setExpanded_2] = useState(false);
  const [expanded_3, setExpanded_3] = useState(false);
 


  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleExpand_1 = () => {
    setExpanded_1(!expanded_1);
  };
  const handleExpand_2 = () => {
    setExpanded_2(!expanded_2);
  };
  const handleExpand_3 = () => {
    setExpanded_3(!expanded_3);
  };
  return (
    <div className="main-body">

      <header className="Header">
        <Header />
        <div className="Header-1">
          <Telegram_Modal/>
        </div>
      </header>

      <main className="Body">
        <section className="sec-1 body-fon">
        </section>
        <section className="sec-2 sec-img ">
       
    
     
          <ul className="row-text">
          <li className='text-down img-down' onClick={handleExpand}>Kомпьютерная диагностика 
          {expanded && <div className="open-text-2">Выездная компьютерная диагностика профессиональными <br /> мультимарочными и&nbsp;мономарочными сканерами</div>}</li>

          <li className='text-down img-down' onClick={handleExpand_1}>Ремонт штатной электроники
          {expanded_1 && <div className="open-text-2">Ремонт замена подкапотной и салонной электропроводки автомобиля</div>}</li>

          <li className='text-down img-down' onClick={handleExpand_2}>Установка доп оборудывания
          {expanded_2 && <div className="open-text-2">Установка сигнализаций, парковочных радаров, аудиосистем, камер и другого нештатного электрооборудования</div>}</li>

          <li className='text-down img-down' onClick={handleExpand_3}>Экстреный запуск ДВС
          {expanded_3 && <div className="open-text-2">Найдем, устраним причину незапуска и запустим бензиновый или дизельный ДВС.</div>}</li>
          </ul>
        </section>
      </main>
      <footer className='Footer'>
        <Footer/>
      </footer>
    </div>


  );
}

export default App;
