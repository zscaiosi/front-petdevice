import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
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

const ArticleRow = styled.article`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`

const ClientSection = styled.section`
  display: flex;
  padding: 5px;
  font-size: 13px;
  background-color: rgba(173,216,230, 0.5);
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
  }
`

const DietSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(230,230,250, 0.5);
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;

  @media(min-width: 768px){
    justify-content: center;
    font-size: 20px;
  }  
`

const PetSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(200,230,200, 0.5);
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 2;

  @media(min-width: 768px){
    justify-content: center;
    font-size: 20px;
  }  
`

class ClienteDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    console.log("localStorage: ", localStorage);
    //Só faz os requests caso ainda não tenha no state as informações
    this.props.getPetSuccess === null && this.props.postLoginSuccess !== null ? this.props.getPetRequest(this.props.postLoginSuccess.user.device) : null;
    this.props.getDietSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDietRequest(this.props.postLoginSuccess.user.device) : null;
    this.props.getDeviceSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDeviceRequest(this.props.postLoginSuccess.user.device) : null;
  }

  componentWillReceiveProps(nextProps){
    
  }

  render(){
    
    return(
      <DivInfos>
        <ClientSection>
          <DivColumn>
            <ArticleRow>
              <b>Nome:</b>
            </ArticleRow>
            <ArticleRow>
              <b>E-mail:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Sexo:</b>
            </ArticleRow>
            <ArticleRow>
              <b>CPF:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Nascimento:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Logradouro:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Número:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Complemento:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Bairro:</b>
            </ArticleRow>
            <ArticleRow>
              <b>CEP:</b>
            </ArticleRow>
            <ArticleRow>
              <b>Estado:</b>
            </ArticleRow>
            <ArticleRow>
              <Link to="/home/device" ><b>Device:</b></Link>
            </ArticleRow>                                                                                                  
          </DivColumn>
          <DivColumn>
            {
              this.props.postLoginSuccess !== null ?
              Object.keys(this.props.postLoginSuccess.user).map( (k, i) => {
                if( i >= 1 && i !== 3 ){
                  console.log(i)
                  return(
                    <ArticleRow key={k+i}>
                      <b> {this.props.postLoginSuccess.user[k]} </b>
                    </ArticleRow>
                  );                
                }
              }) : null
            }
          </DivColumn>
        </ClientSection>
        <DivColumn>
          <Link to="/home/pet" >
            <PetSection>
              <ArticleRow>Pet:</ArticleRow>
              <ArticleRow>
                {
                  this.props.getPetSuccess !== null ? this.props.getPetSuccess.data.nome : "Buscando..."
                }
              </ArticleRow>
            </PetSection>          
          </Link>
        </DivColumn>
      
        <DivColumn>
          <Link to="/home/dieta">
            <DietSection>
              <ArticleRow> Dieta: </ArticleRow>
              <ArticleRow>
                {
                  this.props.getDietSuccess !== null ? this.props.getDietSuccess.data.descricao : "Buscando..."
                }
              </ArticleRow>
            </DietSection>          
          </Link>
        </DivColumn>
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

export default connect(mapStateToProps, { getDeviceRequest, getPetRequest, getDietRequest })(ClienteDashboard);