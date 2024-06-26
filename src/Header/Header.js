import { Link } from "react-router-dom";
import React from 'react';
import './Header.css';
import phhoneOne from '../image/svg/phhoneOne.svg';
import PriceMod from "../modal/PriceMod";


function Header(props) {
  



  return (

    <div className="Hed Hed-2">

      <address className="hed-1">
        <img className="address" alt="Avto_Diagnost" width={60} src={phhoneOne} />
        По телефону: <a className='address-text'  href="tel:+77778889900"><br/>+7(999)6429-321 </a ><br/>
        По эл. почте: <a className='address-text' href="mailto:alarm8619@gmail.com" > alarm8619@gmail.com </a> 
      </address>
      
      <nav className="Hed-3">
        <Link id="z1" to="/">&nbsp;Главная&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link id="z2" to="/About">&nbsp;О Нас</Link>
        <a id="z3" href="#"><PriceMod/></a>
       
      </nav>
      
     
    </div>



  );
}
export default Header;