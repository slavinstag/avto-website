import React from 'react';
import './About.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import KAR_1 from "../image/We/KAR_1.jpg";
import KAR_2 from "../image/We/KAR_2.jpg";
import KAR_3 from "../image/We/KAR_3.jpg";
import cosmo_38 from "../image/We/cosmo_38.jpg";
import teleg112332 from "../image/We/teleg112332.png";
import infra38 from "../image/We/infra38.jpg";



function About() {


  return (


    <div className="conteiner">
      <header className="div-1" >
        <Header />
      </header>
      <div className="div-2" >

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={KAR_1} className="d-block w-100" alt="f1" />
            </div>
            <div className="carousel-item">
              <img src={KAR_2} className="d-block w-100" alt="f2" />
            </div>
            <div className="carousel-item">
              <img src={KAR_3} className="d-block w-100" alt="f3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <article className='text'>
          <h1>Услуги автоэлектрика - диагноста.</h1>
          <p> Решаем широкий спектр проблем с&nbsp;электрикой автомобиля, включая обслуживание, диагностику и&nbsp;ремонт.Наша основная задача выявить
            неисправность вашего автомобиля, и&nbsp;если возможно, ее&nbsp;устранить на&nbsp;месте, то&nbsp;мы&nbsp;обязательно это сделаем.
            Благодаря нашему опыту, мы&nbsp;гарантируем качественное обслуживание и&nbsp;решение проблем с&nbsp;электроникой в&nbsp;кратчайшие
            сроки.Наша цель&nbsp;&mdash; обеспечить безопасность и&nbsp;надежность вашего автомобиля, что позволит вам безопасно передвигаться на&nbsp;вашем авто.
            С&nbsp;прайсом основных наших услуг вы&nbsp;можете ознакомится во&nbsp;вкладке &rsquo;Прайс&rsquo;</p>
          <h4>Обслуживаем такие марки автомобилей как:</h4>
          <ul>
            <li> Opel, VW, Ford, Chevrolet, Skoda </li>
            <li> Toyota, Lexus, Mazda, Honda, Mitsubishi, Nissan, Subaru </li>
            <li>Kia, Hyundai, SsangYong </li>
            <li>Lifan, Haval, Chery, Great Wall</li>
            <li>Lada, Уаз, Газ</li>
          </ul>
          <p>Обратите внимание на&nbsp;наши цены. Все виды услуг наших автоэлектриков в&nbsp;Иркутске и&nbsp;Иркутской области доступны даже при самом скромном
            бюджете. При этом условия работы выездных мастеров значительно тяжелее, чем условия мастеров стационарных автосервисов.
            Вызов эвакуатора, доставка машины до&nbsp;СТО и&nbsp;последующий ремонт займут значительно дольше времени и&nbsp;потребуют более серьезных затрат. А&nbsp;наши выездные
            автоэлектрики&nbsp;&mdash; диагносты решают проблемы на&nbsp;месте, экономя Ваше время и&nbsp;бюджет!</p>
        </article>
      </div>
      <div className="div-3" >
        <div className="foot">
          <h3>Наши рекомендации:</h3><p />
          <a href='https://moya-kosmetika-irkutsk.ru/'>
            <img className="cosmo" src={cosmo_38} />
            <p>Перейти на сайт</p>
          </a>
          <h5>Косметика из Израиля и Кореи<p /> в Иркутске от представителей завода</h5>
          <a href='https://t.me/cosmo38'>
            <img className="cosmo-telegram" src={teleg112332} width={80} height={50} /> </a>
        </div>
        <div className='infra'>
          <a href='https://infra-snab.ru/'>
            <img className="cosmo" src={infra38} />
            <p>Перейти на сайт</p>
          </a>
          <h5>Инфракрасные обогреватели<p />и светодиодные светильники<p /> в Иркутске от представителей завода </h5>
        </div>
      </div>
      <footer className="div-4" >
<Footer/>
      </footer>
    </div>




  );
}
export default About;