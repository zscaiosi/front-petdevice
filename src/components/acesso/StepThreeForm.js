import React, {Component} from 'react';
import axios from 'axios';
import {localApi, awsApi} from '../../config.json';
import InputField from '../reusable/InputFieldComponent';
import styled from 'styled-components';
//Styled components para evitar arquivos CSS

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const HorariosDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const HorariosRow = styled.span`
  display: flex;
  flex-direction: row;
  margin: 0px;

  p{
    margin: 0px;
    cursor: pointer;
    color: red;
  }
`

class StepThreeForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      _id: '',
      descricao: '',
      frequencia_diaria: 1,
      data_inicio: '',
      data_fim: '',
      qtde_racao: '',
      horarios: ["00:00:00"],
      ativa: true,
      device: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let id = String(new Date()).substr(16, 8)+this.props.device.substr(0, 5);

    this.setState({
      _id: id,
      device: this.props.device
    }, () => console.log(this.state))
  }

  //Faz o POST REQUEST para a API utilizando o módulo axios do npm, que é uma interface para HttpRequests assíncronos
    postDietRequest(){
      const instance = axios.create({
        "Content-Type" : "application/json"
      });

      console.log("payload", this.state);

      const request = instance.post(awsApi.url+"/dietas/cadastrar", this.state);

      return request.then( response => {
        console.log('POST SUCCESS', response);

        this.props.onContinue(this.state);
      }).catch( error => {
        console.log('POST ERROR', error);

      });
    }

  handleInputChange(event, extra){
    let name = event.target.name;
    let value = event.target.value;

    console.log('Changed '+name+' value ',value, typeof extra);

    if( name === "horarios" ){
      let currentHorarios = this.state.horarios;
      // eslint-disable-next-line
      currentHorarios.indexOf(value) === -1 && currentHorarios.length < this.state.frequencia_diaria ? currentHorarios.push(value) : null

      console.log(currentHorarios)

      this.setState({
        horarios: currentHorarios
      }, () => console.log(this.state));
      
    }else{
      this.setState({
        [name]: value
      }, () => console.log("2.0", this.state));      
    }
    
  }

  handleSubmit(event){
    event.preventDefault();

    if( this.state.data_inicio === '' || this.state.data_fim === '' ){
      alert("Selecione datas INÍCIO e FIM válidas!");
    }else{
      this.postDietRequest();
    }

  }

  render(){
    return(
      <div className="container">
        <div className="row" >
          <div className="col-md-12">
            <InputField inputType="text" name="descricao" value={this.state.descricao} maxLength="75" fieldName="Descrição" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="number" min={1} name="frequencia_diaria" value={this.state.frequencia_diaria} fieldName="Frequência Diária" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="number" min={100} name="qtde_racao" value={this.state.qtde_racao} fieldName="Quantidade por Porção (g)" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="date" name="data_inicio" value={this.state.data_inicio} fieldName="Data Início" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="date" name="data_fim" value={this.state.data_fim} fieldName="Data Fim" onChange={event => this.handleInputChange(event)} />
            <InputField inputType="select" name="horarios" selectData={
                [
                  "00:00:00", "09:00:00", "09:15:00", "09:30:00", "09:45:00",
                  "10:00:00", "10:15:00", "10:30:00",
                  "10:45:00", "11:00:00", "11:15:00", "11:30:00", "11:45:00", "12:00:00",
                  "12:15:00", "12:30:00", "12:45:00", "13:00:00", "13:15:00", "13:30:00", "13:45:00",
                  "15:00:00", "15:15:00", "15:30:00", "16:00:00", "16:15:00", "16:30:00", "16:45:00",
                  "17:15:00", "17:30:00", "17:45:00", "18:00:00", "18:15:00", "18:30:00", "19:00:00",
                  "19:15:00", "19:30:00", "20:00:00"
                ]
              }
              fieldName="Horários" onChange={event => this.handleInputChange(event)} />
              <p style={{color: 'red'}}>*Ao mudar os horários, eles são adicionados.</p>
            <HorariosDiv>
              { this.state.horarios.map( (horario, index) => {
                return(
                  <HorariosRow >
                    <b> {horario} </b> <p onClick={(e) => {
                      //Função de excluir
                          let currentHorarios = this.state.horarios.filter( (filteredHorario) => {
                            return filteredHorario !== horario
                          });

                          console.log("currentHorarios", currentHorarios);

                          this.setState({
                            horarios: currentHorarios
                          }, () => console.log(this.state));
                      //---FIM DA FUNÇÃO----
                    }} > x </p>
                  </HorariosRow>
                )
              }) }
            </HorariosDiv>
            <button onClick={event => this.handleSubmit(event)} type="submit" name="submit-btn">Cadastrar</button>
          </div>
        </div>
      </div>
    );
  }

}

export default StepThreeForm;
