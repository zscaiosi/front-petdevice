import React, {Component} from 'react';
import StepOneForm from './StepOneForm';
import StepTwoForm from './StepTwoForm';
import StepThreeForm from './StepThreeForm';
import { Redirect } from 'react-router-dom';
// import styled from 'styled-component';


class CadastroWraper extends Component {
  constructor(props){
    super(props);

    this.state = {
      step: 0
    }

    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren(){

    console.log('STEP:',this.state.step);
    let step = this.state.step;
    switch (step) {
      //Retorna apenas a porção do primeiro passo do formulário
      case 0:
        return <StepOneForm onContinue={(param) =>{
          //Ao chamar a função onContinue dentro deste componente, muda o state do componente CadastroWraper
          this.setState({jsonCliente:param, step: 1});
        }} />
      case 1:
        return <StepTwoForm onContinue={(param) =>{
          //Ao chamar a função onContinue dentro deste componente, muda o state do componente CadastroWraper
          this.setState({jsonPet:param, step: 2});
        }}
        dono={this.state.jsonCliente.formDataClient._id}
        device={this.state.jsonCliente.formDataDevice._id}
        />
      case 2:
         return <StepThreeForm onContinue={(param) => {
          
          this.setState({jsonDieta: param, step: 3});
        }}
        device={this.state.jsonCliente.formDataDevice._id}
        />
      default:
        return <Redirect to="/" />
    }
  }

  render(){
    return(
      <div className="row form-row-signup" >
        {this.renderChildren()}
      </div>
    );
  }
}

export default CadastroWraper;