import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Row} from 'react-bootstrap';

class Header extends Component {

  constructor(props){
    super(props);

    this.handleLogut = this.handleLogut.bind(this);
  }

  handleLogut(){
    localStorage.clear();
    document.location.pathname = "/";
  }

  render(){
    return(
      <Row>
        <Nav bsClass="navbar navbar-default ">
          <Nav bsClass="nav navbar-nav ">
            <NavItem> <Link to="/home/pet" >PETS</Link> </NavItem>
            <NavItem> <Link to="/home/dieta"  >DIETAS</Link> </NavItem>
            <NavItem> <Link to="/home/device"  >DEVICES</Link> </NavItem>
            <NavItem> <Link to="/home/cliente"  >CLIENTE</Link> </NavItem>
            <NavItem onClick={this.handleLogut}  > Logout </NavItem>
          </Nav>
        </Nav>
      </Row>
    );    
  }
}

export default Header;
