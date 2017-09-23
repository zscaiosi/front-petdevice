import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {

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
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">								
          <ul className="nav" id="side-menu">															
            <li>
              <Link to="/home/pet"><i className="fa fa-paw fa-fw" /> Gerenciador de Pets</Link>
            </li>
            <li>
              <Link to="/home/dieta"><i className="fa fa-dashboard fa-fw" /> Gerenciador de Dietas</Link>
            </li>						
            <li>
              <Link to="/home/device"><i className="fa fa-cog fa-fw" /> Gerenciador do Device</Link>
            </li>							
            <li>
              <Link to="/home/cliente"><i className="fa fa-user-o fa-fw" /> Gerenciador de Usuário</Link>
            </li>	
          </ul>
        </div>
      </div>
    );    
  }
}

export default SideBar;
