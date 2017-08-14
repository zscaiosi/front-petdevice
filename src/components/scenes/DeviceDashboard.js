import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDeviceRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';
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
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getDeviceRequest(this.props.postLoginSuccess.user.device);
  }

  render(){
    
    return(
      <DivInfos id="infos-container">
        <DeviceSection>
          <DivColumn>
            <ArticleRow>
              <b>Atividades:</b>
            </ArticleRow>                                                                                                   
          </DivColumn>          
          <DivColumn>
          
            {
              this.props.getDeviceSuccess !== null && this.props.getDeviceSuccess.data.atividades !== undefined ? 
                this.props.getDeviceSuccess.data.atividades.map( (atividade, i) => {
                  return(
                    <ArticleRow key={i}>
                      <AtividadesColumn  >
                        <b>{atividade.horario}</b>
                        <b>{atividade.porcao !== undefined ? atividade.porcao+"g" : "0g"}</b>
                      </AtividadesColumn>
                    </ArticleRow>
                  );
                })
                : "Carregando..."
            }            
          
          </DivColumn>
        </DeviceSection>
      </DivInfos>
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

export default connect(mapStateToProps, {getDeviceRequest})(DeviceDashboard);