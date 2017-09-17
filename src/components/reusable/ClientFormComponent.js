import React from 'react';
import InputField from '../reusable/InputFieldComponent';

const ClientForm = (props) => {
  return(
    <span>
      <InputField inputType="text" name="nome" value={props.values.nome} maxLength="75" fieldName="Nome" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="email" value={props.values.email} maxLength="75" fieldName="E-mail" onChange={event => props.hasChanged(event)} />
      <InputField inputType="password" name="psw" value={props.values.psw} maxLength="135" fieldName="Senha" onChange={event => props.hasChanged(event)} />
      <InputField inputType="radio" name="sexo" radioOptions={["masculino", "feminino"]} value={props.values.sexo} fieldName="Sexo" onChange={event => props.hasChanged(event)} />
      <InputField inputType="date" name="dtNascimento" value={props.values.dtNascimento} fieldName="Data de Nascimento" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="logradouro" value={props.values.logradouro} fieldName="Logradouro" onChange={event => props.hasChanged(event)} />
      <InputField inputType="number" name="numero" value={props.values.numero} fieldName="Número" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="complemento" value={props.values.complemento} fieldName="Complemento" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="bairro" value={props.values.bairro} maxLength="75" fieldName="Bairro" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="cep" value={props.values.cep} maxLength="10" fieldName="Cep" onChange={event => props.hasChanged(event)} />
      <InputField inputType="text" name="cidade" value={props.values.cidade} maxLength="35" fieldName="Cidade" onChange={event => props.hasChanged(event)} />
      <InputField inputType="select" name="estado" value={props.values.estado} selectData={["São Paulo", "Rio de Janeiro"]} fieldName="Estado" onChange={event => props.hasChanged(event)} />
      <div className="row d-flex flex-sm-row justify-content-center">
        <button onClick={event => props.handleSubmit("clientes")} type="submit" name="submit-btn">Alterar</button> 
      </div>
    </span>
  );
}

export default ClientForm;