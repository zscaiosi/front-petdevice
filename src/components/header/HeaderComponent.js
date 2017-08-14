import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);

    this.handleLogut = this.handleLogut.bind(this);
  }

  handleLogut(){
    localStorage.clear();
    document.location.reload();
  }

  render(){
    return(
      <header>
        <b> <Link to="/home/pet" >PETS</Link> </b>
        <b> <Link to="/home/pet" >DIETAS</Link> </b>
        <b> <Link to="/home/pet" >DEVICES</Link> </b>
        <b> <Link to="/home/cliente" >CLIENTE</Link> </b>
        <b onClick={this.handleLogut} > Logout </b>
      </header>
    );    
  }
}

export default Header;
