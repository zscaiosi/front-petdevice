import React, {Component} from 'react';
import ClienteDashboard from './ClienteDashboard';
import PetDashboard from './PetDashboard';
import DietsDashboard from './DietsDashboard';
import DeviceDashboard from './DeviceDashboard';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import UpdateForm from './UpdateForm';
import { Row, Col, Panel } from 'react-bootstrap';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px;
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

  @media(min-width: 768px){
    max-width: 500px;
  }
`

const UserInfoSection = styled.section`
  display: flex;
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
      <Col md={12}>
        <Row>
          <Col md={6}>
            <h2>Olá {this.props.postLoginSuccess !== null ? this.props.postLoginSuccess.user.nome : "---"}!</h2>
            <h3> { this.showPhrase() } </h3>
          </Col>
          <Col md={6}>
            <p>Controle aqui seu device, suas informações e as informações do seu PET!</p>
          </Col>
        </Row>
        <Row>
          <Switch>
            <Route path="/home/cliente" component={ClienteDashboard} />
            <Route path="/home/pet" component={PetDashboard} />
            <Route path="/home/dieta" component={DietsDashboard} />
            <Route path="/home/device" component={DeviceDashboard} />
            <Route path="/home/update/:entity" component={UpdateForm} />
          </Switch>          
        </Row>
      </Col>      
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