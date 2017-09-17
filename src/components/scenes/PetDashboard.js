import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDeviceRequest,
  getPetRequest,
  getDietRequest
} from "../../actions/deviceActions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Panel, Button } from 'react-bootstrap';


const MarginSpan = styled.span`
  display: flex;
  margin-top: 35px;
`

class PetDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("localStorage: ", localStorage);
    this.props.getPetRequest(this.props.postLoginSuccess.user.device);
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <Row>
          <Panel header="Informações" bsClass="panel" bsStyle="primary">
            <Col md={6}>
              <Row>
                <b>Nome:</b>
              </Row>
              <Row>
                <b>Raça:</b>
              </Row>
              <Row>
                <b>Porte:</b>
              </Row>
              <Row>
                <b>Pedigree:</b>
              </Row> 
              <Row>
                <b>Especie:</b>
              </Row>
              <Row>
                <b>Idade:</b>
              </Row>                                                                     
            </Col>
            <Col md={6}>
              {
                this.props.getPetSuccess !== null && this.props.getPetSuccess.data !== null ? Object.keys(this.props.getPetSuccess.data).map( (key, index) => {
                  return(
                    (index > 0 && index < 7) ?
                    <Row key={index+"/"+key}>
                      <b> {this.props.getPetSuccess.data[key]} </b>
                    </Row>
                    :
                    null
                  )
                })
                :
                <Row>
                  <p>Carregando... </p>
                </Row>
              }
            </Col>
						<Row bsClass="row centered-row" >
							<Link style={{textDecoration: "none", color: "white"}} to="/home/update/pets"><button className="btn btn-danger" type="button" style={{ cursor: 'pointer' }} >Alterar</button></Link>
						</Row>            
          </Panel> 
          </Row>         
        </Col>        
      </Row>
    );
  }
}

const mapStateToProps = state => {
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
  };
};

export default connect(mapStateToProps, {
  getDeviceRequest,
  getPetRequest,
  getDietRequest
})(PetDashboard);
