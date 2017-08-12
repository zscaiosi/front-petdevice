import React, {Component} from 'react';
import ClienteDashboard from './ClienteDashboard';
import PetDashboard from './PetDashboard';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
  render(){
    return(
      <div>
        <h2>Olá {this.props.postLoginSuccess !== null ? this.props.postLoginSuccess.user.nome : "---"}!</h2>
        <Switch>
          <Route path="/home/cliente" component={ClienteDashboard} />
          <Route path="/home/pet" component={PetDashboard} />
        </Switch>
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