import React from 'react';
import InputField from '../reusable/InputFieldComponent';

const PetForm = (props) => {
  console.log("PETS", props.values);
  return(
    <span>
      <InputField inputType="text" name="nome" value={props.values.nome} maxLength="75" fieldName="Nome" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="raca" value={props.values.raca} maxLength="75" fieldName="Raça" onChange={event => props.hasChanged(event)} />
      <InputField inputType="number" name="idade" value={props.values.idade} maxLength="2" fieldName="Idade" onChange={event => props.hasChanged(event)} />
      <InputField inputType="radio" name="pedigree" radioOptions={["sim", "não"]} value={props.values.pedigree} fieldName="Pedigree" onChange={event => props.hasChanged(event)} />
      <InputField inputType="radio" name="porte" radioOptions={["pequeno", "medio", "grande"]} value={props.values.porte} fieldName="Porte" onChange={event => props.hasChanged(event)} />
      <InputField inputType="radio" name="especie" radioOptions={["cão", "gato"]} value={props.values.especie} fieldName="Especie" onChange={event => props.hasChanged(event)} />
      <div className="row d-flex flex-sm-row justify-content-center">
        <button onClick={event => props.handleSubmit("pets")} type="submit" name="submit-btn">Alterar</button> 
      </div>
    </span>
  );
}

export default PetForm;