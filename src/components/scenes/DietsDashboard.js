import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { getPetRequest, getDietRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class DietDashboard extends Component {
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
      <div className="container">
        <div className="row client-color d-md-flex flex-md-row">
          <div className="col-md-6 d-md-flex flex-md-column">
            <div className="row flex-row badge badge-primary m-md-3">
              <b>Descrição:</b>
            </div>
            <div className="row flex-row badge badge-primary m-md-3 ">
              <b>Frequência Diária:</b>
            </div>
            <div className="row flex-row badge badge-primary m-md-3">
              <b>Data Início:</b>
            </div>
            <div className="row flex-row badge badge-primary m-md-3">
              <b>Data Fim:</b>
            </div>
            <div className="row flex-row badge badge-primary m-md-3">
              <b>Quantidade por porção:</b>
            </div>
            <div className="row flex-row badge badge-primary m-md-3">
              <b>Horários:</b>
            </div>                                                                                                    
          </div>
          <div className="col-md-6 d-md-flex flex-md-column">
          {
            this.props.getDietSuccess !== null ?
            Object.keys(this.props.getDietSuccess.data).map( (k, i) => {
              if( i >= 1 && i < 6 ){
                return(
                  <div className="row flex-row badge badge-info m-md-3" key={k+i}>
                    { this.props.getDietSuccess.data[k] === "" ? <b>"---"</b> : <b>{this.props.getDietSuccess.data[k]}</b> }
                  </div>
                );
              }else if( i === 7 ){
                return(
                  <span className="" key={k+i}>
                    { this.props.getDietSuccess.data["horarios"].map( (horario, index) => {
                      return (        
                        <div className="row flex-row badge badge badge-info m-md-3" key={horario+index}>
                          <b>{horario}</b>
                        </div>
                      );
                    }) }
                  </span>
                );
              }
            }) : null
          }
          </div>
               
        </div>

        <div className="row flex-row justify-content-center" >
          <button className="btn btn-danger" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/clientes">Alterar</Link></button>
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

export default connect(mapStateToProps, null)(DietDashboard);