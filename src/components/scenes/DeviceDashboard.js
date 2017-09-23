import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeviceRequest } from "../../actions/deviceActions";


class DeviceDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterDate: "",
      showedAct: ""
    };
    this.filterByDate = this.filterByDate.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.getDeviceRequest(this.props.postLoginSuccess.user.device);
  }

  filterByDate(range) {
    if (range !== "") {
      //let obj = [{ "data": "2017-08-10", "horario": "12:00:00" }, { "data": "2017-08-13", "horario": "17:00:00" }];

      let showedActitivities = this.props.getDeviceSuccess.data.atividades
        .filter((activity, index) => {
          return range === activity.data;
        })
        .map((a, i) => {
          console.log("log:", a);
          return a;
        });

      return showedActitivities;
    }
  }

  handleFilterChange(e) {
    if (e.target.value.length === 10) {
      this.setState(
        {
          filterDate: e.target.value,
          showedAct: this.filterByDate(e.target.value)
        },
        () => {}
      );
    }
  }

  cleanFilter() {
    console.log("-------clean");
    this.setState({
      filterDate: "",
      showedAct: ""
    });
  }

  render() {
    return(
			<div id="page-wrapper">

        {
          this.props.getDeviceSuccess !== null ?
            <span>
              <div className="row">
                <div className="col-lg-8">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      Informações
                    </div>
                    <div className="panel-body">
                      <div className="row show-grid">
                        <div className="col-md-4"><strong>ID</strong></div>
                        <div className="col-md-8">
                          {
                            this.props.getDeviceSuccess.data._id
                          }
                        </div>
                      </div>
                      <div className="row show-grid">
                        <div className="col-md-4"><strong>Modelo</strong></div>
                        <div className="col-md-8">
                          {
                            this.props.getDeviceSuccess.data.modelo ? this.props.getDeviceSuccess.data.modelo : "DEFAULT"
                          }                          
                        </div>
                      </div>
                    </div>													
                  </div>							
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      Atividades até agora
                    </div>
                    <div className="panel-body">
                      {
                        this.state.showedAct === ""
                        ? ( this.props.getDeviceSuccess !== null && this.props.getDeviceSuccess.data.atividades !== undefined )
                          ? this.props.getDeviceSuccess.data.atividades.map( (atividade, index) => {
                            return(
                              <div className="row show-grid">

                                <div className="col-md-1"><strong>Horário</strong></div>
                                <div className="col-md-3">
                                  { atividade.horario }
                                </div>
                                <div className="col-md-1"><strong>Porção</strong></div>
                                <div className="col-md-3">
                                  { atividade.porcao } g
                                </div>
                              </div>	                              
                            );
                          })
                        :
                          <div className="row show-grid">

                            <div className="col-md-1"><strong>Horário</strong></div>
                            <div className="col-md-3">
                              NENHUM
                            </div>
                            <div className="col-md-1"><strong>Porção</strong></div>
                            <div className="col-md-3">
                              NENHUMA
                            </div>
                          </div>                          
                          :
                            null                       
                      }

                    </div>													
                  </div>							
                </div>
              </div>              
            </span>
          :
            null                 
        }
      </div>    
    );
    // return (
    //   <Row>
    //     <Col md={12}>
    //       <Panel header="Informações" bsClass="panel" bsStyle="primary">
    //         <Row>
    //           <span className=" centered-span-row col-md-6" >
    //             <Col md={6}>
    //               <Row>
    //                 <b>ID:</b>
    //               </Row>
    //               <Row>
    //                 <b>Modelo:</b>
    //               </Row>           
    //             </Col>
    //           </span>
    //           {/* Segunda coluna */}
    //           <span className=" centered-span-row col-md-6" >
    //             <Col md={6}>
    //               {
    //                 this.props.getDeviceSuccess !== null ? 
    //                     <Row>
    //                       <b>{ this.props.getDeviceSuccess.data._id }</b>
    //                     </Row>
    //                 :
    //                   null
    //               }
    // {this.state.showedAct === ""
    // ? this.props.getDeviceSuccess !== null &&
    //   this.props.getDeviceSuccess.data.atividades !== undefined
    //   ? this.props.getDeviceSuccess.data.atividades.map(
    //       (atividade, i) => {
    //         return (
    //           <tr key={i}>
    //             <td>
    //               {atividade.horario}
    //             </td>
    //             <td>
    //               {atividade.porcao !== undefined
    //                 ? atividade.porcao + "g"
    //                 : "0g"}
    //             </td>                                 
    //           </tr>                              
    //         );
    //       }
    //     )
    //   : this.props.isGettingDevice === false
    //     ? "Nenhuma atividade encontrada."
    //     : "Carregando..."
    // : this.state.showedAct.map((atividade, i) => {
    //     return (
    //       <tr key={i}>
    //         <td>
    //           {atividade.horario}
    //         </td>
    //         <td>
    //           {atividade.porcao !== undefined
    //             ? atividade.porcao + "g"
    //             : "0g"}
    //         </td>                                 
    //       </tr> 
    //     );
    //   })}                
    //               {
    //                 this.props.getDeviceSuccess !== null ? 
    //                     <Row>
    //                       <b>{ this.props.getDeviceSuccess.data.modelo }</b>
    //                     </Row>
    //                 :
    //                   null
    //               }
    //             </Col>
    //           </span>          
    //         </Row>
    //         <Row>
    //          <AtividadesTitle> Atividades até agora:</AtividadesTitle>  
    //         </Row> 
    //         <Row bsClass="row row-top-spaced">
    //           <Col md={12}>
    //             <Table  condensed hover>
    //               <thead>
    //                 <th><tr>Horários</tr></th>
    //                 <th><tr>Porções</tr></th>
    //               </thead>
    //               <tbody>

    //               </tbody>
    //             </Table>
    //           </Col>
    //         </Row>           
    //       </Panel>
    //     </Col>
    //   </Row>
    // );
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

export default connect(mapStateToProps, { getDeviceRequest })(DeviceDashboard);
