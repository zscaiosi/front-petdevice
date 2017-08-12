import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';

class PetDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    console.log("localStorage: ", localStorage);
  }

  render(){
    
    return(
      <div>
        Infos do Pet:
        {
          this.props.getPetSuccess !== null ?
          Object.keys(this.props.getPetSuccess.data).map( (k, i) => {
            return(
              <div key={k+i}>
                { k === "device" ? <b> Device: { this.props.getPetSuccess.data.device } </b> : this.props.getPetSuccess.data[k] }
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
    postLoginSuccess: state.login.postLoginSuccess,
    isGettingDevice: state.device.isGettingDevice,
    getDeviceSuccess: state.device.getDeviceSuccess,
    //Pet
    isGettingPet: state.device.isGettingPet,
    getPetSuccess: state.device.getPetSuccess,
    getPetError: state.device.getPetError,
    //Diet
    isGettingDiet: state.device.isGettingDiet,
    getDietSuccess: state.device.getDietSuccess,
    getDietError: state.device.getDietError
  }
}

export default connect(mapStateToProps, { getDeviceRequest, getPetRequest, getDietRequest })(PetDashboard);