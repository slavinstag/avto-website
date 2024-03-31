import React from 'react';
import airplan5544433 from "../image/svg/airplan5544433.svg";
import crypto455574 from "../image/svg/crypto455574.svg";
import nout3445 from "../image/svg/nout3445.svg";
import phonenav23334 from "../image/svg/phonenav23334.svg";
import './footer.css';
import '../App.css';


function footer() {

  return (

    <>
        <h1>Преимущества</h1>
                <ul className="adv-list">
                    <li className="adv-card">
                        <img className="adv-svg" src={airplan5544433} width={50}/>
                        <p className="adv-text">
                           Прибудем в крачайшие сроки </p>
                    </li>
                    <li className="adv-card">
                    <img className="adv-svg" src={crypto455574} width={50}/>
                        <p className="adv-text">
                            Сэкономим ваши деньги </p>
                    </li>

                    <li className="adv-card">
                    <img className="adv-svg" src={nout3445} width={50}/>
                        <p className="adv-text">
                        Выявим неисправность на&nbsp;месте поломки</p>
                    </li>


                    <li class="adv-card">
                    <img className="adv-svg" src={phonenav23334} width={50}/>
                        <p className="adv-text">
                        Прибудем в&nbsp;любую точку по&nbsp;городу Иркутску и&nbsp;Иркутской обл</p>
                    </li>

                    <li class="adv-card">
                        <p className="adv-text"></p>
                    </li>

                </ul>



    </>



  );
}
export default footer;