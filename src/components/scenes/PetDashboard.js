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
			<div id="page-wrapper">
				<div className="row">
          <div className="col-lg-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                Informações
              </div>
              {
                this.props.getPetSuccess !== null ?
                  <div className="panel-body">
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Nome</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.nome }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Raça</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.raca }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Porte</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.porte }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Pedigree</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.pedigree }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Especie</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.especie }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Idade</strong></div>
                      <div className="col-md-8">{ this.props.getPetSuccess.data.idade }</div>
                    </div>							
                  </div>
                :
                  "Carregando..."
              }
            </div>
            <div>
              <button className="btn btn-warning" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/pets">Alterar</Link></button>											
            </div>
          </div>
				</div>
			</div>
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
