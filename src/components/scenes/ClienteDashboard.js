import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDeviceRequest} from '../../actions/deviceActions';
import Header from '../header/HeaderComponent';

class ClienteDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <Header />
        Infos do cliente:
        {
          this.props.user !== null ?
          Object.keys(this.props.user).map( (k, i) => {
            return(
              <div key={k+i}>
                { this.props.user[k] }
              </div> 
            );
          }) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.postLoginSuccess !== null ? state.login.postLoginSuccess.user : state.login.postLoginSuccess,
    isGettingDevice: state.device.isGettingDevice,
    getDeviceSuccess: state.device.getDeviceSuccess
  }
}

export default connect(mapStateToProps, { getDeviceRequest })(ClienteDashboard);