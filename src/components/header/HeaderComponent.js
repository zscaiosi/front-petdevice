import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
    <header>
      <b> <Link to="/home/pet" >PETS</Link> </b>
      <b> <Link to="/home/pet" >DIETAS</Link> </b>
      <b> <Link to="/home/pet" >DEVICES</Link> </b>
      <b> <Link to="/home/cliente" >CLIENTE</Link> </b>
    </header>
  );
}

export default Header;
