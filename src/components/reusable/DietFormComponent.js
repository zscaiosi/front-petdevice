import React from 'react';
import InputField from '../reusable/InputFieldComponent';
import styled from 'styled-components';

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

const DietForm = (props) => {
  return(
    <span>
      <InputField inputType="text" name="descricao" value={props.values.descricao} maxLength="75" fieldName="Descrição" onChange={event => props.hasChanged(event)} />
      <InputField inputType="number" min={1} name="frequencia_diaria" value={props.values.frequencia_diaria} fieldName="Frequência Diária" onChange={event => props.hasChanged(event)} />
      <InputField inputType="date" name="data_inicio" value={props.values.data_inicio} fieldName="Data Início" onChange={event => props.hasChanged(event)} />
      <InputField inputType="date" name="data_fim" value={props.values.data_fim} fieldName="Data Fim" onChange={event => props.hasChanged(event)} />
      <InputField inputType="number" min={100} name="qtde_racao" value={props.values.qtde_racao} fieldName="Quantidade de Ração (g):" onChange={event => props.hasChanged(event)} />
      <InputField inputType="select" name="horarios" selectData={["00:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "17:00:00", "18:00:00" ]}  fieldName="Horários" onChange={event => props.hasChanged(event)} />
      <HorariosDiv>
        { props.values.horarios.map( (horario, index) => {
          return(
            <HorariosRow key={index+"/"+horario} >
              <b> {horario} </b> <p name="exclude" onClick={(e) => {
                //Função de excluir
                    let currentHorarios = props.values.horarios.filter( (filteredHorario) => {
                      return filteredHorario !== horario
                    });

                    props.hasExcluded(currentHorarios);

                //---FIM DA FUNÇÃO----
              }} > x </p>
            </HorariosRow>
          )
        }) }
      </HorariosDiv>
      <div className="row d-flex flex-sm-row justify-content-center">
        <button onClick={event => props.handleSubmit("dietas")} type="submit" name="submit-btn">Alterar</button> 
      </div>
    </span>
  );
}

export default DietForm;