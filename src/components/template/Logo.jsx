import './css/Logo.css';
import logo from '../../assets/img/logo.png';
import React from 'react';

function Logo(props) {
  return (

      <aside className="logo">Logo
      
      <a href='/' className='logo'>
        <img src={logo} alt= "logo"/>
      </a>

      </aside>;

  );
}
export default Logo;
