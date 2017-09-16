import React, {Component} from 'react';
import axios from 'axios';
import {localApi, awsApi} from '../../config.json';
import InputField from '../reusable/InputFieldComponent';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap';

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

  a{
    text-decoration: none;
    color: white;
    text-align: center;
  }
`

class StepOneForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      formDataClient: {
        _id: '',
        nome: '',
        email:'',
        psw: '',
        sexo: 'não binário',
        cpf: '',
        dtNascimento: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: 'SP',
        device: ''
      },
      formDataDevice: {
        _id: '',
        modelo: 'beta',
        cliente: ''
      },
      isPosting: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postClienteRequest = this.postClienteRequest.bind(this);
  }
//Faz o POST REQUEST para a API utilizando o módulo axios do npm, que é uma interface para HttpRequests assíncronos
  postClienteRequest(){
    // const instance = axios.create({
    //   headers: {'Content-Type': 'application/json'}
    // });

    let payloadClient = {
      ...this.state.formDataClient,
      device: this.state.formDataDevice._id
    }

    const postClient = () => {
      return axios.post(`${awsApi.url}/clientes/cadastrar`, payloadClient);
    }

    const postDevice = () => {
      return axios.post(`${awsApi.url}/devices/cadastrar`, {
        "_id" : this.state.formDataDevice._id,
        "modelo" : this.state.formDataDevice.modelo,
        "cliente": this.state.formDataClient._id
      });
    }

    console.log('payload =>=>', payloadClient, this.state.formDataDevice);
    //Faz requests paralelos
    const request = axios.all([ postClient(), postDevice() ]);

    return request.then( axios.spread( (clientRes, deviceRes) => {
      console.log("clientRes", clientRes, "deviceRes", deviceRes);

      this.props.onContinue(this.state);

    })).catch( axios.spread( (clientErr, deviceErr) => {

    }));
  }

  handleInputChange(event){
    let name = event.target.name;
    let value = event.target.value;

    if( name === 'device' ){
      this.setState({
        formDataDevice: {
          ...this.state.fomDataDevice,
          _id: value
        }
      });
    }else{
      if( name === 'cpf' ){
        this.setState({
          formDataClient: {
            ...this.state.formDataClient,
            cpf: value,
            _id: value
          }
        }, () => console.log('--->>>_id', this.state.formDataClient._id));
      }else{
        this.setState({
          ...this.state,
          formDataClient: {
            ...this.state.formDataClient,
            [name] : value
          }
        }, () => console.log('---->>>>', this.state.formDataClient[name]));          
      }
    }
    
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      isPosting: true
    }, () => {
      this.postClienteRequest();      
    })
  }

  render(){
    return(
      <Row>
        <Col md={12} >
          <div className="row" >
            <div className="col-md-12">
              <InputField inputType="text" name="nome" value={this.state.formDataClient.nome} maxLength="75" fieldName="Nome" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="email" value={this.state.formDataClient.email} maxLength="75" fieldName="E-mail" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="password" name="psw" value={this.state.formDataClient.psw} maxLength="135" fieldName="Senha" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="radio" name="sexo" radioOptions={["masculino", "feminino"]} value={this.state.formDataClient.sexo} fieldName="Sexo" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="cpf" value={this.state.formDataClient.cpf} maxLength="11" fieldName="CPF" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="date" name="dtNascimento" value={this.state.formDataClient.dtNascimento} fieldName="Data de Nascimento" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="logradouro" value={this.state.formDataClient.logradouro} fieldName="Logradouro" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="number" name="numero" value={this.state.formDataClient.numero} fieldName="Número" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="complemento" value={this.state.formDataClient.complemento} fieldName="Complemento" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="bairro" value={this.state.formDataClient.bairro} maxLength="75" fieldName="Bairro" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="cep" value={this.state.formDataClient.cep} maxLength="10" fieldName="Cep" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="cidade" value={this.state.formDataClient.cidade} maxLength="35" fieldName="Cidade" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="select" name="estado" value={this.state.formDataClient.estado} selectData={["São Paulo", "Rio de Janeiro"]} fieldName="Estado" onChange={event => this.handleInputChange(event)} />
              <InputField inputType="text" name="device" value={this.state.formDataDevice._id} maxLength="10" fieldName="Chave do Dispositivo" onChange={event => this.handleInputChange(event)} />

              <Row>
                <Col md={12} style={{ display: 'flex', flexDirection: 'column' }} >
                  <Button onClick={event => this.handleSubmit(event)} type="submit" name="submit-btn">Cadastrar</Button>
                  <Link style={{ textAlign: 'center' }} to="/" >Voltar</Link>                   
                </Col>               
              </Row>
            </div>
          </div>         
        </Col>
      </Row>
    );
  }
//
//   IN IN_EMAIL VARCHAR(100),
//     IN IN_SENHA VARCHAR(200),
//     IN IN_SEXO VARCHAR(2),
//     IN IN_NOME VARCHAR(200),
//     IN IN_CPF VARCHAR(11),
//     IN IN_DATA_NASCIMENTO DATE,
//     IN IN_CEP VARCHAR(8),
//     IN IN_LOGRADOURO VARCHAR(100),
//     IN IN_NUMERO VARCHAR(10),
//     IN IN_COMPLEMENTO VARCHAR(50),
//     IN IN_BAIRRO VARCHAR(100),
//     IN IN_LOCALIDADE VARCHAR(55),
//     IN IN_SIGLA_ESTADO VARCHAR(2)
// )
}

export default StepOneForm;
