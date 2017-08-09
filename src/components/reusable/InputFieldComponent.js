import React, { Component } from 'react';
import styled from 'styled-components';

const FieldWraper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: center;
`

class InputField extends Component {
	constructor(props) {
		super(props);

		this.validateCep = this.validateCep.bind(this);
	}

	validateCep(cep) {
		if (cep.includes("-")) {
			cep = cep.replace("-", "");
			return cep.length === 9 ? true : false
		}
	}

	render() {
		if (this.props.inputType === "text") {
			return (
				<FieldWraper>
					<label htmlFor={this.props.name} > {this.props.fieldName} </label>
					<input id={this.props.name} name={this.props.name} type="text" value={this.props.value} maxLength={this.props.maxLength ? this.props.maxLength : 100} onChange={this.props.onChange} />
				</FieldWraper>
			);
		} else if (this.props.inputType === "select") {
			return (
				<FieldWraper>
					<label > {this.props.fieldName} </label>
					<select name={this.props.name} defaultValue="Selecione..." onChange={this.props.onChange}>
						{this.props.selectData.map((data, index) => {
							return (
								<option key={index} value={data}>{data}</option>
							);
						})}
					</select>
				</FieldWraper>
			);
		} else if (this.props.inputType === "number") {
			return (
				<FieldWraper>
					<label htmlFor={this.props.name} > {this.props.fieldName} </label>
					<input id={this.props.name} name={this.props.name} type="number" min={this.props.min} max="99999" value={this.props.value} onChange={this.props.onChange} />
				</FieldWraper>
			);
		} else if (this.props.inputType === "password") {
			return (
				<FieldWraper>
					<label htmlFor={this.props.name} > {this.props.fieldName} </label>
					<input id={this.props.name} name={this.props.name} type="password" value={this.props.value} maxLength={this.props.maxLength ? this.props.maxLength : 100} onChange={this.props.onChange} />
				</FieldWraper>
			);
		} else if (this.props.inputType === "radio") {
			return (
				<FieldWraper>
					<b> {this.props.fieldName} </b>
					{this.props.radioOptions.map((option, index) => {
						return (
							<span key={index}>
								<label htmlFor={option} > {option} </label>
								<input type="radio" id={option} name={this.props.name} value={option} onChange={this.props.onChange} />
							</span>
						);
					})}
				</FieldWraper>
			);
		} else if (this.props.inputType === "date") {
			return(
				<FieldWraper>
					<label htmlFor={this.props.name} > {this.props.fieldName} </label>
					<input id={this.props.name} name={this.props.name} type="date" value={this.props.value} onChange={this.props.onChange} />
				</FieldWraper>				
			);
		}
	}
}

export default InputField;