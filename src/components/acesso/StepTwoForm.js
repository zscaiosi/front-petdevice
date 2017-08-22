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
class StepOneForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      _id: '',
      nome: '',
      raca: '',
      porte: '',
      pedigree: false,
      especie: '',
      idade: '',
      device: '',
      dono: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      device: this.props.device,
      dono: this.props.dono,
      _id: this.props.dono.slice(5)
    }, () => {
      console.log("estado,", this.state)
    });
  }

  //Faz o POST REQUEST para a API utilizando o módulo axios do npm, que é uma interface para HttpRequests assíncronos
    postPetRequest(){
      const instance = axios.create({
        "Content-Type" : "application/json"
      });

      console.log("payload", this.state);

      const request = instance.post(localApi.url+"/pets/cadastrar", this.state);

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
    this.setState({_id: this.props.dono, device: this.props.device}, () => {
      this.postPetRequest();
    })

  }

  render(){
    return(
      <div className="panel panel-default col-md-8">
        <div className="row" >
          <div className="col-md-12">
            <InputField inputType="text" name="nome" value={this.state.nome} maxLength="75" fieldName="Nome" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="text" name="raca" value={this.state.raca} maxLength="75" fieldName="Raça" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="number" name="idade" value={this.state.idade} maxLength="2" fieldName="Idade" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="radio" name="pedigree" radioOptions={["sim", "não"]} value={this.state.pedigree} fieldName="Pedigree" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="radio" name="porte" radioOptions={["pequeno", "medio", "grande"]} value={this.state.porte} fieldName="Porte" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="radio" name="especie" radioOptions={["cão", "gato"]} value={this.state.especie} fieldName="Especie" onChange={event => this.handleInputChange(event)} />
            
            <button onClick={event => this.handleSubmit(event)} type="submit" name="submit-btn">Cadastrar</button>
          </div>
        </div>
      </div>
    );
  }

}

export default StepOneForm;
