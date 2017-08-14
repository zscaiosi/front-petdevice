import React, {Component} from 'react';
import ClienteDashboard from './ClienteDashboard';
import PetDashboard from './PetDashboard';
import DietsDashboard from './DietsDashboard';
import DeviceDashboard from './DeviceDashboard';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;

  h2{
    margin: 10px 0px 0px 0px;
  }
  h3{
    margin: 10px 0px 0px 0px;
  }
`

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
      <ContainerDiv>
        <WelcomeSection>
          <h2>Olá {this.props.postLoginSuccess !== null ? this.props.postLoginSuccess.user.nome : "---"}!</h2>
          <h3> { this.showPhrase() } </h3>
        </WelcomeSection>
        <Switch>
          <Route path="/home/cliente" component={ClienteDashboard} />
          <Route path="/home/pet" component={PetDashboard} />
          <Route path="/home/dieta" component={DietsDashboard} />
          <Route path="/home/device" component={DeviceDashboard} />
        </Switch>
      </ContainerDiv>      
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