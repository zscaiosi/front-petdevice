import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
      <div className="container">
        <div className="d-flex ">
          <div className="flex-row panel-heading" >
            <b className="badge badge-default"> <Link to="/home/pet" style={{ margin: '10px' }}>PETS</Link> </b>
            <b className="badge badge-default"> <Link to="/home/dieta" style={{ margin: '10px' }} >DIETAS</Link> </b>
            <b className="badge badge-default"> <Link to="/home/device" style={{ margin: '10px' }} >DEVICES</Link> </b>
            <b className="badge badge-default"> <Link to="/home/cliente" style={{ margin: '10px' }} >CLIENTE</Link> </b>
            <b onClick={this.handleLogut} style={{ margin: '10px' }} > Logout </b>
          </div>
        </div>
      </div>
    );    
  }
}

export default Header;
