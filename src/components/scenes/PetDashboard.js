import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const DivInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    border: 0.5px solid rgba(230,230,250, 0.5);
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

const PetSection = styled.section`
  display: flex;
  padding: 5px;
  font-size: 13px;
  background-color: rgba(173,216,230, 0.5);
  margin-left: 20px;
  margin-right: 20px;

  @media(min-width: 768px){
    flex-direction: row;
    font-size: 20px;
    width: 100%;
    justify-content: center;
  }
`

const ArticleRow = styled.article`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`

class PetDashboard extends Component {
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
        <PetSection>
          <DivColumn>
            <ArticleRow>
              <b>Nome:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Raça:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Porte:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Pedigree:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Espécie:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Idade:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Device:</b>
            </ArticleRow>                                                                                                     
          </DivColumn>          
          <DivColumn>
          {
            this.props.getPetSuccess !== null ?
            Object.keys(this.props.getPetSuccess.data).map( (k, i) => {
              if( i >= 1 && i < 8 ){
                return(
                  <ArticleRow key={k+i}>
                    { this.props.getPetSuccess.data[k] }
                  </ArticleRow>
                );                
              }
            }) : null
          }
          </DivColumn>
        </PetSection>
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

export default connect(mapStateToProps, { getDeviceRequest, getPetRequest, getDietRequest })(PetDashboard);