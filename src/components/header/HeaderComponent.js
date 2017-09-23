import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo-bar.png';

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
      <div className="wrapper">
        <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
          <div className="container-fluid d-flex flex-row justify-content-around">

            <div className="navbar-header">	
              <img className="navbar-brand" src={logo} />
            </div>

            <ul className="nav navbar-nav" >														
              <li>
                <a target="_blank" href="mailto:grupo.petdevice@gmail.com" >
                  <i className="fa fa-envelope fa-fw" title="Entre em contato conosco" />
                </a>
              </li>
              <li onClick={() => this.handleLogut()}>
                <Link to="/home/cliente"><i className="fa fa-sign-out fa-fw" title="Logout" /></Link>                   
              </li>
            </ul> 

          </div>
        </nav>
      </div>
    );    
  }
}

export default Header;
