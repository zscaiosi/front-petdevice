import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDeviceRequest,
  getPetRequest,
  getDietRequest
} from "../../actions/deviceActions";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <MarginSpan>
          <div className="col-md-12">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Raça</th>
                          <th>Porte</th>
                          <th>Pedigree</th>
                          <th>Espécie</th>
                          <th>Idade</th>    
                          <th>Device</th>                                                  
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="info">
                          {
                            this.props.getPetSuccess !== null
                            ? Object.keys(
                                this.props.getPetSuccess.data
                              ).map((k, i) => {
                                if (i >= 1 && i < 8) {
                                  return (
                                    <td key={k + i}>
                                      {this.props.getPetSuccess.data[k]}
                                    </td>
                                  );
                                }
                              })
                            : null
                          }
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          </MarginSpan>          
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="col-md-6">
                <button type="button" className="btn btn-info">
                  ALTERAR
                </button>
              </div>
              <div className="col-md-6" />
            </div>
            <div className="col-md-6" />
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
