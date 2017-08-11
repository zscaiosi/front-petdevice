import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDeviceRequest} from '../../actions/deviceActions';

import {Link} from 'react-router-dom';

class ClienteDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    
    console.log("localStorage", localStorage);
  }

  render(){
    
    return(
      <div>
        Infos do cliente:
        {
          this.props.user !== null ?
          Object.keys(this.props.user).map( (k, i) => {
            return(
              <div key={k+i}>
                { k === "device" ? <Link to="/home/pet" > { this.props.user.device } </Link> : this.props.user[k] }
              </div> 
            );
          }) : null
        }
        <Link to="/home/pet">pet</Link>
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