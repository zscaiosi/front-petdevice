import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDietRequest } from '../../actions/deviceActions';
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
    this.props.getDietRequest(this.props.postLoginSuccess.user.device);
  }

  render(){
    return(

      <div id="page-wrapper">

        <div className="row">
          {
            this.props.getDietSuccess !== null ?
              <div className="col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Informações
                  </div>
                  <div className="panel-body">
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Descrição</strong></div>
                      <div className="col-md-8">{ this.props.getDietSuccess.data.descricao }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Frequência Diária</strong></div>
                      <div className="col-md-8">{ this.props.getDietSuccess.data.frequencia_diaria }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Data Início</strong></div>
                      <div className="col-md-8">{ this.props.getDietSuccess.data.data_inicio }</div>
                    </div>
                    <div className="row show-grid">
                      <div className="col-md-4"><strong>Data Fim</strong></div>
                      <div className="col-md-8">{ this.props.getDietSuccess.data.data_fim }</div>
                    </div>
                    <div className="row show-grid" style={{borderBottom: 'solid 1px'}}>
                      <div className="col-md-4" ><strong>Quantidade por porção</strong></div>
                      <div className="col-md-8" >{ this.props.getDietSuccess.data.qtde_racao }</div>
                    </div>
                    <div className="row show-grid" style={{marginTop: '10px'}}>
                      <div className="col-md-4"><strong>Horários</strong></div>
                      <div className="col-md-8">
                        {
                          this.props.getDietSuccess.data.horarios.map( (horario, index) => {
                            return(
                              <span key={index}>
                                <b>{horario}</b> <br/>
                              </span>
                            );
                          })
                        }
                      </div>
                    </div>							
                  </div>													
                </div>
                <div>
                  <button className="btn btn-warning" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/dietas">Alterar</Link></button>																								
                </div>
              </div>   
            :
              null                     
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

export default connect(mapStateToProps, {getDietRequest})(DietDashboard);