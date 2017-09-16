import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { getPetRequest, getDietRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';

import { Row, Col, Panel } from 'react-bootstrap';

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
      <Col md={12}>
				<Row >
          <Panel header="Informações" bsClass="panel" bsStyle="primary">
            <Row>
              <span className=" centered-span-row col-md-6" >
                <Col md={6}>
                  <Row>
                    <b>Descrição:</b>
                  </Row>
                  <Row>
                    <b>Frequência Diária:</b>
                  </Row>
                  <Row>
                    <b>Data Início:</b>
                  </Row>
                  <Row>
                    <b>Data Fim:</b>
                  </Row>
                  <Row>
                    <b>Quantidade por porção:</b>
                  </Row>
                  <Row>
                    <b>Horários:</b>
                  </Row>                                                                                                    
                </Col>
              </span>
              <span className=" centered-span-row col-md-6" >
                <Col md={6}>
                  {
                    this.props.getDietSuccess !== null && this.props.getDietSuccess.data !== null ?
                      Object.keys(this.props.getDietSuccess.data).map( (k, i) => {
                        if( i >= 1 && i < 6 ){
                          return(
                            <Row key={k+i}>
                              { this.props.getDietSuccess.data[k] === "" ? <b>"---"</b> : <b>{this.props.getDietSuccess.data[k]}</b> }
                            </Row>
                          );
                        }else if( i === 7 ){
                          return(
                            <Row key={k+i}>
                              { this.props.getDietSuccess.data["horarios"].map( (horario, index) => {
                                return (        
                                  <Row key={horario+index}>
                                    <b>{horario}</b>
                                  </Row>
                                );
                              }) }
                            </Row>
                          );
                        }
                      })
                    :
                    this.props.getDietSuccess.response === "ok" && this.props.getDietSuccess.data === null ? <p>Clique em "Alterar" para cadastrar uma dieta!</p> : <p>Aguarde...</p>
                  }
                </Col>
              </span>
            </Row>
            <Row bsClass="centered-row">
              <button className="btn btn-danger" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/dietas">Alterar</Link></button>  
            </Row>
          </Panel>     
        </Row>
      </Col>
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