import React, {Component} from 'react';
import ClienteDashboard from './ClienteDashboard';
import PetDashboard from './PetDashboard';
import DietsDashboard from './DietsDashboard';
import DeviceDashboard from './DeviceDashboard';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SideBar from '../header/SideBarComponent';
// import styled from 'styled-components';
import UpdateForm from './UpdateForm';
import Header from '../header/HeaderComponent';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      phrases: [
        "Veja suas informações abaixo:",
        "Veja as informações do seu PET:",
        "Veja os detalhes da dieta programada para o seu device:",
        "Veja os detalhes do seu device:"
      ]
    }
  }

  showPhrase(){
    switch(this.props.location.pathname){
      case "/home/cliente":
      return (
        <span> { this.state.phrases[0] } </span>
      );
      case "/home/pet":
        return (
          <span> { this.state.phrases[1] } </span>
        );     
      case "/home/dieta":
        return (
          <span> { this.state.phrases[2] } </span>
        );
      case "/home/device":
        return (
          <span> { this.state.phrases[3] } </span>
        );                 
    }
  }

  render(){
    return(
      <div className="row">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-2 full-navbar" style={{padding: '0px'}} >
            <SideBar />
          </div>
          <div className="col-md-8">
            <Switch>
              <Route path="/home/cliente" component={ClienteDashboard} />
              <Route path="/home/pet" component={PetDashboard} />
              <Route path="/home/dieta" component={DietsDashboard} />
              <Route path="/home/device" component={DeviceDashboard} />
              <Route path="/home/update/:entity" component={UpdateForm} />
            </Switch>              
          </div>          
        </div>        
        {/* CONTEÚDOS */}         
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postLoginSuccess: state.login.postLoginSuccess,
    isGettingDevice: state.device.isGettingDevice,
    getDeviceSuccess: state.device.getDeviceSuccess
  }
}

export default connect(mapStateToProps, null)(Home);