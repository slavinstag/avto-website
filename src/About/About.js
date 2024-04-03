import React from 'react';
import './About.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import kar1 from "../image/We/kar1.jpg";
import kar22 from "../image/We/kar22.jpg";
import kar33 from "../image/We/kar33.jpg";




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
              <img src={kar1} className="d-block w-100" alt="Фото наши работы" />
            </div>
            <div className="carousel-item">
              <img src={kar22} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={kar33} className="d-block w-100" />
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
          <h2>Услуги автоэлектрика - диагноста.</h2>
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

        <h3 className='we-foot'>Наши рекомендации:</h3>

        <div className='card-we card-img'>
          <p className='card-text-we'>Косметика из&nbsp;Израиля и&nbsp;Кореи в&nbsp;Иркутске от&nbsp;представителей завода</p>
          <a className='web-we' href='https://moya-kosmetika-irkutsk.ru/' target='my cosmo'> Перейти на сайт &gt;&gt;</a>
          <a className='web-we telegram-img' href='https://t.me/cosmo38' target='my cosmo 2'></a>
        </div>
        <br />
        <div className='card-we card-img-2'>
          <p className='card-text-we'>Инфракрасные обогреватели и&nbsp;светодиодные светильники
            в&nbsp;Иркутске от&nbsp;представителей завода</p>
          <a className='web-we' href='https://infra-snab.ru/' target='infra'> Перейти на сайт &gt;&gt;</a>
        </div>
      </div>
      <footer className="div-4" >
        <Footer />
      </footer>
    </div>




  );
}
export default About;