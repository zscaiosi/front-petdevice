
import React, {Component} from 'react';
import axios from 'axios';
import {awsApi} from '../../config.json';
import ClientForm from '../reusable/ClientFormComponent';
import PetForm from '../reusable/PetFormComponent';
import DietForm from '../reusable/DietFormComponent';
import {connect} from 'react-redux';
import {getUserRequest} from '../../actions/loginActions';

class UpdateForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      clientPayload: {
        _id: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data._id : this.props.user._id,
        nome: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.nome : this.props.user.nome,
        email: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.email : this.props.user.email,
        psw: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.psw : this.props.user.psw,
        sexo: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.sexo : this.props.user.sexo,
        dtNascimento: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.dtNascimento : this.props.user.dtNascimento,
        logradouro: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.logradouro : this.props.user.logradouro,
        numero: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.numero : this.props.user.numero,
        complemento: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.complemento : this.props.user.complemento,
        bairro: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.bairro : this.props.user.bairro,
        cep: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.cep : this.props.user.cep,
        cidade: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.cidade : this.props.user.cidade,
        estado: this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.estado : this.props.user.estado,
      },
      petPayload: {
        _id: this.props.getPetSuccess._id,
        nome: this.props.getPetSuccess.nome,
        raca: this.props.getPetSuccess.raca,
        porte: this.props.getPetSuccess.porte,
        pedigree: this.props.getPetSuccess.pedigree,
        especie: this.props.getPetSuccess.especie,
        idade: this.props.getPetSuccess.idade,
      },
      dietPayload: {
        _id: this.props.getDietSuccess._id,
        descricao: this.props.getDietSuccess.data.descricao,
        frequencia_diaria: this.props.getDietSuccess.data.frequencia_diaria,
        data_inicio: this.props.getDietSuccess.data.data_inicio,
        data_fim: this.props.getDietSuccess.data.data_fim,
        qtde_racao: this.props.getDietSuccess.data.qtde_racao,
        horarios: this.props.getDietSuccess.data.horarios,
        ativa: this.props.getDietSuccess.data.ativa,
      },
      updateSuccess: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState){

    if( this.state.updateSuccess !== null && prevState.updateSuccess !== this.state.updateSuccess ){
      this.props.getUserRequest(this.props.user._id);
    }

  }

  putRequest(payload){
    const instance = axios.create({
      headers: {
        "Content-Type":"application/json"
      }
    });

    const request = instance.put(`${awsApi.url}/${this.props.match.params.entity}/atualizar`, payload);

    request.then( (response) => {
      this.setState({
        updateSuccess: {
          ok: true,
          res: response
        }
      }, () => {
        console.log("Success update", this.state);

      });
    }).catch( (error) => {
      this.setState({
        updateSuccess: {
          ok: false,
          res: error
        }
      }, () => console.log("Error updating", this.state));
    });
  }

  handleInputChange(event, extra){
    let name = event.target.name;
    let value = event.target.value;

    console.log('Changed '+name+' value ',value);

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
      });      
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

  handleSubmit(form){

    switch (form) {
      case "clientes":
        this.putRequest(this.state.clientPayload);
      break;
      case "dietas":
        this.putRequest(this.state.dietPayload);
      break;
      case "pets":
        this.putRequest(this.state.petPayload);
      break;
      default:
        return null;
    }

  }

  renderChildren(){
    switch (this.props.match.params.entity) {
      case "dietas":
        return <DietForm values={this.state.dietPayload} currentDiet={this.props.getDietSuccess} hasExcluded={ (h) => this.handleExclude(h)} hasChanged={ (e) => this.handleInputChange(e) } handleSubmit={(f) => this.handleSubmit(f)} />
        
      case "pets":
        return <PetForm values={this.state.petPayload} currentPet={this.props.getPetSuccess} hasChanged={ (e) => this.handleInputChange(e) } handleSubmit={(f) => this.handleSubmit(f)} />

      case "clientes":
        return <ClientForm values={this.state.clientPayload} currentClient={this.props.user} hasChanged={ (e) => this.handleInputChange(e) } handleSubmit={(f) => this.handleSubmit(f)} />
    
      default:
        return null;
    }
  }

  render(){
    return(
      <div className="container">

      <div className="row d-flex flex-sm-column">
        <div className="col-sm-12 d-flex flex-sm-row justify-content-center">
          {/* <div className="col-sm-3">

          </div>           */}
          <div className="col-sm-6 d-flex flex-sm-column">
            {
              this.renderChildren()
            }
          </div>
          {/* <div className="col-sm-3">

          </div> */}
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-sm-12 d-flex flex-sm-row justify-content-center">
         { this.state.updateSuccess !== null && this.state.updateSuccess.ok === true ? <div className="alert alert-success">Atualizado</div> : null }
        </div>
      </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getDietSuccess: state.device.getDietSuccess,
    user: state.login.postLoginSuccess.user,
    getPetSuccess: state.device.getPetSuccess.data,
    getUserSuccess: state.login.getUserSuccess
  }
}

export default connect(mapStateToProps, {getUserRequest})(UpdateForm);