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
          this.props.postLoginSuccess !== null ?
          Object.keys(this.props.postLoginSuccess.user).map( (k, i) => {
            return(
              <div key={k+i}>
                { k === "device" ? <Link to="/home/pet" > { this.props.postLoginSuccess.user.device } </Link> : this.props.postLoginSuccess.user[k] }
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
    postLoginSuccess: state.login.postLoginSuccess,
    isGettingDevice: state.device.isGettingDevice,
    getDeviceSuccess: state.device.getDeviceSuccess
  }
}

export default connect(mapStateToProps, { getDeviceRequest })(ClienteDashboard);