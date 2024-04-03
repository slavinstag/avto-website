import React from 'react';
import './footer.css';
import '../App.css';


function footer() {

  return (

    <>
        <h1>Преимущества</h1>
                <ul className="adv-list">
                    <li className="adv-card adv-svg-1">
                        
                        <p className="adv-text">
                           Прибудем в крачайшие сроки </p>
                    </li>
                    <li className="adv-card adv-svg-2">
                        <p className="adv-text">
                            Сэкономим ваши деньги </p>
                    </li>

                    <li className="adv-card adv-svg-3">
                        <p className="adv-text">
                        Выявим неисправность на&nbsp;месте поломки</p>
                    </li>


                    <li class="adv-card adv-svg-4">
                        <p className="adv-text">
                        Прибудем в&nbsp;любую точку по&nbsp;городу Иркутску и&nbsp;Иркутской обл</p>
                    </li>
                      
                </ul>



    </>



  );
}
export default footer;