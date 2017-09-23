import React from 'react';
import InputField from '../reusable/InputFieldComponent';

const PetForm = (props) => {
  console.log("PETS", props.values);
  return(
    <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <div className="login-panel panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title"><strong>Informações do PET</strong></h2>
        </div>
        <div className="panel-body">
          <form role="form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="text" name="nome" value={props.values.nome} maxLength="75" fieldName="Nome" onChange={event => props.hasChanged(event)} />
              </div>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="text" name="raca" value={props.values.raca} maxLength="75" fieldName="Raça" onChange={event => props.hasChanged(event)} />
              </div>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="number" name="idade" value={props.values.idade} maxLength="2" fieldName="Idade" onChange={event => props.hasChanged(event)} />
              </div>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="radio" name="pedigree" radioOptions={["sim", "não"]} value={props.values.pedigree} fieldName="Pedigree" onChange={event => props.hasChanged(event)} />
              </div>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="radio" name="porte" radioOptions={["pequeno", "medio", "grande"]} value={props.values.porte} fieldName="Porte" onChange={event => props.hasChanged(event)} />
              </div>
              <div className="form-group">
                <InputField styleClass="form-control" inputType="radio" name="especie" radioOptions={["cão", "gato"]} value={props.values.especie} fieldName="Especie" onChange={event => props.hasChanged(event)} />                                                                                                            
              </div>            
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <button className="btn btn-warning" onClick={event => props.handleSubmit("pets")} type="submit" name="submit-btn">Alterar</button>             
              </span>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>         
  );
}

export default PetForm;