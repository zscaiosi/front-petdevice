import React, {Component} from 'react';
import axios from 'axios';
import {localApi} from '../../config.json';
import InputField from '../reusable/InputFieldComponent';
import styled from 'styled-components';
//Styled components para evitar arquivos CSS
const OutterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
class StepThreeForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      _id: '',
      descricao: '',
      frequencia_diaria: '',
      data_inicio: '',
      data_fim: false,
      qtde_racao: '',
      horarios: [],
      ativa: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Faz o POST REQUEST para a API utilizando o módulo axios do npm, que é uma interface para HttpRequests assíncronos
    postDietRequest(){
      const instance = axios.create({
        "Content-Type" : "application/json"
      });

      console.log("payload", this.state);

      const request = instance.post(localApi.url+"/dietas/cadastrar", this.state);

      return request.then( response => {
        console.log('POST SUCCESS', response);

        this.props.onContinue(this.state);
      }).catch( error => {
        console.log('POST ERROR', error);

      });
    }

  handleInputChange(event){
    let name = event.target.name;
    let value = event.target.value;

    console.log('Changed '+name+' value ',value);

    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({device: this.props.device}, () => {
      this.postDietRequest();
    })
  }

  render(){
    return(
      <FormDiv >
        <InputField inputType="text" name="descricao" value={this.state.descricao} maxLength="75" fieldName="Descrição" onChange={event => this.handleInputChange(event)} />
          <InputField inputType="number" name="frequencia_diaria" value={this.state.frequencia_diaria} fieldName="Frequência Diária" onChange={event => this.handleInputChange(event)} />
          <InputField inputType="tex" name="data_inicio" value={this.state.data_inicio} maxLength="10" fieldName="Data de Início" onChange={event => this.handleInputChange(event)} />
          <InputField inputType="tex" name="data_fim" value={this.state.data_fim} maxLength="10" fieldName="Data de Término" onChange={event => this.handleInputChange(event)} />
          <InputField inputType="number" name="qtde_racao" value={this.state.qtde_racao} fieldName="Porção por refeição (g)" onChange={event => this.handleInputChange(event)} />

          <button onClick={event => this.handleSubmit(event)} type="submit" name="submit-btn">Cadastrar</button>
      </FormDiv>
    );
  }

}

export default StepThreeForm;
