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
            }  fieldName="Horários" onChange={event => props.hasChanged(event)} />
      <HorariosDiv>
        { props.values.horarios !== null ? props.values.horarios.map( (horario, index) => {
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
        })
        :
        null }
      </HorariosDiv>
      <div className="row d-flex flex-sm-row justify-content-center">
        <button style={{width: '100%', height: '100%'}} onClick={event => props.handleSubmit("dietas")} type="submit" name="submit-btn">Alterar</button> 
      </div>
    </span>
  );
}

export default DietForm;