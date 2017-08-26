
import React, {Component} from 'react';
import axios from 'axios';
import {awsApi} from '../../config.json';
import ClientForm from '../reusable/ClientFormComponent';
import PetForm from '../reusable/PetFormComponent';
import DietForm from '../reusable/DietFormComponent';
import {connect} from 'react-redux';

class UpdateForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      clientPayload: {
        _id: this.props.user._id,
        nome: this.props.user.nome,
        email:this.props.user.email,
        psw: this.props.user.psw,
        sexo: this.props.user.sexo,
        cpf: this.props.user.cpf,
        dtNascimento: this.props.user.dtNascimento,
        logradouro: this.props.user.logradouro,
        numero: this.props.user.numero,
        complemento: this.props.user.complemento,
        bairro: this.props.user.bairro,
        cep: this.props.user.cep,
        cidade: this.props.user.cidade,
        estado: this.props.user.estado,
      },
      petPayload: {
        _id: '',
        nome: '',
        raca: '',
        porte: '',
        pedigree: false,
        especie: '',
        idade: '',
      },
      dietPayload: {
        _id: '',
        descricao: this.props.getDietSuccess.data.descricao,
        frequencia_diaria: this.props.getDietSuccess.data.frequencia_diaria,
        data_inicio: this.props.getDietSuccess.data.data_inicio,
        data_fim: this.props.getDietSuccess.data.data_fim,
        qtde_racao: this.props.getDietSuccess.data.qtde_racao,
        horarios: this.props.getDietSuccess.data.horarios,
        ativa: this.props.getDietSuccess.data.ativa,
      },
      updateSuccess: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  putRequest(payload){
    const instance = axios.create({
      headers: {
        "Content-Type":"application/json"
      }
    });

    const request = instance.put(`${awsApi.url}/${this.props.entity}/atualizar`, payload);

    request.then( (response) => {
      this.setState({
        updateSuccess: {
          ok: true,
          res: response
        }
      }, () => console.log("Success update", this.state));
    }).catch( (error) => {
      this.setState({
        updateSuccess: {
          ok: false,
          res: error
        }
      });
    });
  }

  handleInputChange(event, extra){
    let name = event.target.name;
    let value = event.target.value;

    console.log('Changed '+name+' value ',value, typeof extra);

    if( name === "horarios" ){
      let currentHorarios = this.state.dietPayload.horarios;
      // eslint-disable-next-line
      currentHorarios.indexOf(value) === -1 && currentHorarios.length < this.state.dietPayload.frequencia_diaria ? currentHorarios.push(value) : null

      this.setState({
        dietPayload: {
          ...this.state.dietPayload,
          horarios: currentHorarios
        }
      });
      
    }else if( this.props.match.params.entity === "clientes" ){
      this.setState({
        clientPayload: {
          ...this.state.clientPayload,
          [name]: value
        }
      });      
    }else if( this.props.match.params.entity === "pets" ){
      this.setState({
        petPayload: {
          ...this.state.petPayload,
          [name]: value
        }
      });      
    }else if( this.props.match.params.entity === "dietas" ){
      this.setState({
        dietPayload: {
          ...this.state.dietPayload,
          [name]: value
        }
      }, () => console.log("State---", this.state.dietPayload));      
    }
    
  }

  handleExclude(newHorarios){
    console.log("NEW HORARIOS", newHorarios)
    this.setState({
      dietPayload: {
        ...this.state.dietPayload,
        horarios: newHorarios
      }
    });
  }

  handleSubmit(){
    //this.putRequest();
  }

  renderChildren(){
    switch (this.props.match.params.entity) {
      case "dietas":
        return <DietForm values={this.state.dietPayload} currentDiet={this.props.getDietSuccess} hasExcluded={ (h) => this.handleExclude(h)} hasChanged={ (e) => this.handleInputChange(e) } />
        
      case "pets":
        return <PetForm values={this.state.petPayload} />

      case "clientes":
        return <ClientForm values={this.state.clientPayload} currentClient={this.props.user} hasChanged={ (e) => this.handleInputChange(e) } onSubmit={() => this.handleSubmit()} />
    
      default:
        return null;
    }
  }

  render(){
    return(
      <div className="container">

      <div className="row d-flex flex-sm-column">
        <div className="col-sm-12">
          <div className="col-sm-6">
            {
              this.renderChildren()
            }
          </div>
          <div className="col-sm-6">

          </div>
        </div>
      </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getDietSuccess: state.device.getDietSuccess,
    user: state.login.postLoginSuccess.user
  }
}

export default connect(mapStateToProps, null)(UpdateForm);