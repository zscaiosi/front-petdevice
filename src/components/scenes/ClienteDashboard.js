import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';


class ClienteDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    console.log("localStorage: ", localStorage);
    //Só faz os requests caso ainda não tenha no state as informações
    this.props.getPetSuccess === null && this.props.postLoginSuccess !== null ? this.props.getPetRequest(this.props.postLoginSuccess.user.device) : null;
    this.props.getDietSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDietRequest(this.props.postLoginSuccess.user.device) : null;
  }

  componentWillReceiveProps(nextProps){
    
  }

  handleLogout(){
    localStorage.clear();
    document.location.reload();
  }

  render(){
    
    return(
      <div>
        <p onClick={() => this.handleLogout()} >Logout</p> <br/>
        Infos do cliente:
        {
          this.props.postLoginSuccess !== null ?
          Object.keys(this.props.postLoginSuccess.user).map( (k, i) => {
            return(
              <div key={k+i}>
                { k === "device" ? <b> Device: { this.props.postLoginSuccess.user.device } </b> : this.props.postLoginSuccess.user[k] }
              </div>
            );
          }) : null
        }
        <div>
          -------<br/>
          Pet:
          {
            this.props.getPetSuccess !== null ? this.props.getPetSuccess.data.nome : "Buscando..."
          }          
        </div>
        <div>
          -------<br/>
          Dieta:
          {
            this.props.getDietSuccess !== null ? this.props.getDietSuccess.data.descricao : "Buscando..."
          }          
        </div>        
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

export default connect(mapStateToProps, { getDeviceRequest, getPetRequest, getDietRequest })(ClienteDashboard);