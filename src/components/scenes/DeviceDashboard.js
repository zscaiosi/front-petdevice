import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeviceRequest } from '../../actions/deviceActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DivInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(230,230,250, 0.5);

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    border: 0.5px solid rgba(230,230,250, 0.5);
    margin-top: 30px;
  }
`

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  a{
    text-decoration: none;
    color: black;
  }
`

const DeviceSection = styled.section`
  display: flex;
  padding: 5px;
  font-size: 13px;
  background-color: rgba(173,216,230, 0.5);
  margin-left: 20px;
  margin-right: 20px;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
  }
`

const ArticleRow = styled.article`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`

const AtividadesColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

class DeviceDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterDate: "",
      showedAct: ""
    }
    this.filterByDate = this.filterByDate.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.getDeviceRequest(this.props.postLoginSuccess.user.device);
  }

  filterByDate(range) {
    if (range !== "") {

      //let obj = [{ "data": "2017-08-10", "horario": "12:00:00" }, { "data": "2017-08-13", "horario": "17:00:00" }];

      let showedActitivities = this.props.getDeviceSuccess.data.atividades.filter((activity, index) => {
        return range === activity.data;
      }).map((a, i) => {
        console.log("log:", a);
        return a;
      });

      return showedActitivities;
    }
  }

  handleFilterChange(e) {
    if (e.target.value.length === 10) {
      this.setState({
        filterDate: e.target.value,
        showedAct: this.filterByDate(e.target.value)
      }, () => {

      });
    }
  }

  cleanFilter() {
    console.log("-------clean");
    this.setState({
      filterDate: '',
      showedAct: ''
    });
  }

  render() {

    return (
      <div id="container">
        <div className="row client-color d-md-flex flex-md-row mt-5">
          <div className="col-md-12">

            <div className="row">
              {/* PRIMEIRA COLUNA */}
{/*               <div className="col-md-6 d-md-flex flex-md-column">

                <div className="row d-md-flex flex-md-row justify-content-center">
                  <button className="btn btn-danger" style={{ maxWidth: '100px', cursor: 'pointer' }} type="button" onClick={() => this.cleanFilter()} >Limpar</button>
                </div>

              </div> */}
              {/* SEGUNDA COLUNA */}
              <div className="col-md-6 d-md-flex flex-md-column">

                <div className="row d-md-flex flex-md-row">
                  <b className="alert alert-success">Atividades:</b>
                </div>

                <div className="row d-md-flex flex-md-column">
                  {
                    this.state.showedAct === "" ? (this.props.getDeviceSuccess !== null && this.props.getDeviceSuccess.data.atividades !== undefined ?
                      this.props.getDeviceSuccess.data.atividades.map((atividade, i) => {
                        return (
                          <div className="row" key={i}>
                            <div className="col-md-12 d-md-flex flex-md-column" >
                              <b>{atividade.horario}</b>
                              <b>{atividade.porcao !== undefined ? atividade.porcao + "g" : "0g"}</b>
                            </div>
                          </div>
                        );
                      })
                      : ( this.props.isGettingDevice === false ? "Nenhuma atividade encontrada." : "Carregando..." ) ) : this.state.showedAct.map((atividade, i) => {
                        return (
                          <div className="row" key={i}>
                            <div className="col-md-12 d-md-flex flex-md-column" >
                              <b>{atividade.horario}</b>
                              <b>{atividade.porcao !== undefined ? atividade.porcao + "g" : "0g"}</b>
                            </div>
                          </div>
                        );
                      })
                  }
                </div>

              </div>
            </div>

           {/*  <div className="row ">
              <div className="col-md-12 d-md-flex flex-md-row justify-content-center">
                <label className="alert alert-success">Filtrar por data:</label>
                <input type="date" value={this.state.filterDate} onChange={e => {
                  console.log(e.target.value);
                  this.handleFilterChange(e);
                }} />                
              </div>
            </div> */}
          </div>
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

export default connect(mapStateToProps, { getDeviceRequest })(DeviceDashboard);