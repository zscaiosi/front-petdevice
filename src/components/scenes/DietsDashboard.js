import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { getPetRequest, getDietRequest } from '../../actions/deviceActions';
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

const DietSection = styled.section`
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

const HorarioColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`

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
      <DivInfos id="infos-container">
        <DietSection>
          <DivColumn>
            <ArticleRow>
              <b>Descrição:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Frequência Diária:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Data Início:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Data Fim:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Quantidade por porção:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Horários:</b>
            </ArticleRow>                                                                                                    
          </DivColumn>          
          <DivColumn>
          {
            this.props.getDietSuccess !== null ?
            Object.keys(this.props.getDietSuccess.data).map( (k, i) => {
              if( i >= 1 && i < 6 ){
                return(
                  <ArticleRow key={k+i}>
                    { this.props.getDietSuccess.data[k] === "" ? "---" : this.props.getDietSuccess.data[k] }
                  </ArticleRow>
                );
              }else if( i === 7 ){
                return(
                  <ArticleRow key={k+i}>
                    <HorarioColumnDiv>
                    { this.props.getDietSuccess.data["horarios"].map( (horario, index) => {
                      return (        
                        <b key={horario+index} >{horario}</b>
                      );
                    }) }
                    </HorarioColumnDiv>
                  </ArticleRow>
                );
              }
            }) : null
          }
          </DivColumn>
        </DietSection>
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

export default connect(mapStateToProps, null)(DietDashboard);