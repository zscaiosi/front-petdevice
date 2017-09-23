import React from 'react';
import InputField from '../reusable/InputFieldComponent';

const ClientForm = (props) => {
  return(
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="login-panel panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title"><strong>Informações de Usuário</strong></h2>
          </div>
          <div className="panel-body">
            <form role="form" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="nome" value={props.values.nome} maxLength="75" fieldName="Nome" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="email" value={props.values.email} maxLength="75" fieldName="E-mail" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="password" name="psw" value={props.values.psw} maxLength="135" fieldName="Senha" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="radio" name="sexo" radioOptions={["masculino", "feminino"]} value={props.values.sexo} fieldName="Sexo" onChange={event => props.hasChanged(event)} />
                </div>              
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="date" name="dtNascimento" value={props.values.dtNascimento} fieldName="Data de Nascimento" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="logradouro" value={props.values.logradouro} fieldName="Logradouro" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="number" name="numero" value={props.values.numero} fieldName="Número" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="complemento" value={props.values.complemento} fieldName="Complemento" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="bairro" value={props.values.bairro} maxLength="75" fieldName="Bairro" onChange={event => props.hasChanged(event)} />
                </div> 
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="cep" value={props.values.cep} maxLength="10" fieldName="Cep" onChange={event => props.hasChanged(event)} />
                </div>
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="text" name="cidade" value={props.values.cidade} maxLength="35" fieldName="Cidade" onChange={event => props.hasChanged(event)} />
                </div> 
                <div className="form-group">
                  <InputField styleClass="form-control" inputType="select" name="estado" value={props.values.estado} selectData={["São Paulo", "Rio de Janeiro"]} fieldName="Estado" onChange={event => props.hasChanged(event)} />
                </div>
                                                                                                              
                <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <button className="btn btn-warning" onClick={event => props.handleSubmit("clientes")} type="submit" name="submit-btn">Alterar</button>
                </span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>        
  );
}

export default ClientForm;