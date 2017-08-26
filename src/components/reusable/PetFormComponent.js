import React from 'react';
import InputField from '../reusable/InputFieldComponent';

const PetForm = (props) => {
  return(
    <span>
      <InputField inputType="text" name="nome" value={this.state.nome} maxLength="75" fieldName="Nome" onChange={event => this.handleInputChange(event)} />
      <InputField inputType="text" name="raca" value={this.state.raca} maxLength="75" fieldName="Raça" onChange={event => this.handleInputChange(event)} />
      <InputField inputType="number" name="idade" value={this.state.idade} maxLength="2" fieldName="Idade" onChange={event => this.handleInputChange(event)} />
      <InputField inputType="radio" name="pedigree" radioOptions={["sim", "não"]} value={this.state.pedigree} fieldName="Pedigree" onChange={event => this.handleInputChange(event)} />
      <InputField inputType="radio" name="porte" radioOptions={["pequeno", "medio", "grande"]} value={this.state.porte} fieldName="Porte" onChange={event => this.handleInputChange(event)} />
      <InputField inputType="radio" name="especie" radioOptions={["cão", "gato"]} value={this.state.especie} fieldName="Especie" onChange={event => this.handleInputChange(event)} />
    </span>
  );
}

export default PetForm;