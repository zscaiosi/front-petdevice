import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
import { getUserRequest } from '../../actions/loginActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Panel, Button } from 'react-bootstrap';

class ClienteDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		//console.log("localStorage: ", localStorage);
		//Só faz os requests caso ainda não tenha no state as informações
		(this.props.getPetSuccess === null || this.props.getPetSuccess.data === null) && this.props.postLoginSuccess !== null ? this.props.getPetRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.postLoginSuccess !== null ? this.props.getDietRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.getDeviceSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDeviceRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.getUserSuccess === null && this.props.postLoginSuccess !== null ? this.props.getUserRequest(this.props.postLoginSuccess.user._id) : null;
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
		return (
			<div id="page-wrapper">
				
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">Olá { this.props.getUserSuccess !== null ? this.props.getUserSuccess.data.nome : "Buscando..." }</h1>
						<h4 className="">Veja suas informações abaixo:</h4>
					</div>			
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading">
								Informações
							</div>
							<div className="panel-body">
								<div className="row show-grid">
									<div className="col-md-4"><strong>Nome</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.nome
											:
												null
										}									
									</div>
								</div>
								<div className="row show-grid">
									<div className="col-md-4"><strong>E-mail</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.email
											:
												null
										}									
									</div>
								</div>
								<div className="row show-grid">
									<div className="col-md-4"><strong>Sexo</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.sexo
											:
												null
										}									
									</div>
								</div>
								<div className="row show-grid">
									<div className="col-md-4"><strong>CPF</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.cpf
											:
												null
										}									
									</div>
								</div>
								<div className="row show-grid">
									<div className="col-md-4"><strong style={{width: '100%'}} >Data de Nascimento</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.dtNascimento
											:
												null
										}									
									</div>
								</div>
								<div className="row show-grid">
									<div className="col-md-4"><strong>Logradouro</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.logradouro
											:
												null
										}									
									</div>
								</div>		
								<div className="row show-grid">
									<div className="col-md-4"><strong>Número</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.numero
											:
												null
										}									
									</div>
								</div>	
								<div className="row show-grid">
									<div className="col-md-4"><strong>Complemento</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.complemento
											:
												null
										}									
									</div>
								</div>	
								<div className="row show-grid">
									<div className="col-md-4"><strong>Bairro</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.bairro
											:
												null
										}									
									</div>
								</div>	
								<div className="row show-grid">
									<div className="col-md-4"><strong>CEP</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.cep
											:
												null
										}
									</div>
								</div>	
								<div className="row show-grid">
									<div className="col-md-4"><strong>Cidade</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.cidade
											:
												null
										}									
									</div>
								</div>	
								<div className="row show-grid">
									<div className="col-md-4"><strong>Estado</strong></div>
									<div className="col-md-8">
										{
											this.props.getUserSuccess !== null ?
												this.props.getUserSuccess.data.estado
											:
												null
										}									
									</div>
								</div>
									
							</div>													
						</div>
						<div >
							<button className="btn btn-warning" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/clientes">Alterar</Link></button>												
						</div>
					</div>
				</div>
			</div>
		);					
	}
}

const mapStateToProps = (state) => {
	return {
		postLoginSuccess: state.login.postLoginSuccess,
		isGettingDevice: state.device.isGettingDevice,
		getDeviceSuccess: state.device.getDeviceSuccess,
		//Pet
		isGettingPet: state.device.isGettingPet,
		getPetSuccess: state.device.getPetSuccess,
		getPetError: state.device.getPetError,
		//Diet
		isGettingDiet: state.device.isGettingDiet,
		getDietSuccess: state.device.getDietSuccess,
		getDietError: state.device.getDietError,
		//User
		getUserSuccess: state.login.getUserSuccess
	}
}

export default connect(mapStateToProps, { getDeviceRequest, getPetRequest, getDietRequest, getUserRequest })(ClienteDashboard);