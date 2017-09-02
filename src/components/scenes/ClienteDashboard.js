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
		this.props.getPetSuccess === null && this.props.postLoginSuccess !== null ? this.props.getPetRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.getDietSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDietRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.getDeviceSuccess === null && this.props.postLoginSuccess !== null ? this.props.getDeviceRequest(this.props.postLoginSuccess.user.device) : null;
		this.props.getUserSuccess === null && this.props.postLoginSuccess !== null ? this.props.getUserRequest(this.props.postLoginSuccess.user._id) : null;
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (
			<Col md={12}>
				<Row >
					<Panel header="Informações" bsClass="panel" bsStyle="primary">
						<Row>
							<span className=" centered-span-row col-md-6" >
								<Col md={6}>
									<Row>
										<b>Nome:</b>
									</Row>
									<Row>
										<b>E-mail:</b>
									</Row>
									<Row>
										<b>Sexo:</b>
									</Row>
									<Row>
										<b>CPF:</b>
									</Row>
									<Row>
										<b>Nascimento:</b>
									</Row>
									<Row>
										<b>Logradouro:</b>
									</Row>
									<Row>
										<b>Número:</b>
									</Row	>
									<Row>
										<b>Complemento:</b>
									</Row>
									<Row>
										<b>Bairro:</b>
									</Row>
									<Row>
										<b>CEP:</b>
									</Row>
									<Row>
										<b>Cidade:</b>
									</Row>							
									<Row>
										<b>Estado:</b>
									</Row>
									<Row>
										<b><Link to="/home/device" style={{ color: 'white' }} >Device:</Link></b>
									</Row>
								</Col>						
							</span>
							<span className=" centered-span-row col-md-6" >
								<Col md={6}>

									{
										this.props.getUserSuccess !== null ?
											Object.keys(this.props.getUserSuccess.data).map((k, i) => {
												if (k !== "psw" && k !== "username" && k !== "device" && k !== "_id") {
													return (
														<Row key={k + i} >
															<b> {this.props.getUserSuccess.data[k]} </b>
														</Row>
													);
												}
											}) : null
									}

								</Col>
							</span>							
						</Row>
						<Row bsClass="row centered-row" >
							<Link style={{textDecoration: "none", color: "white"}} to="/home/update/clientes"><button className="btn btn-danger" type="button" style={{ cursor: 'pointer' }} >Alterar</button></Link>
						</Row>
					</Panel>
				</Row>

				{/*FIM DO ROW COM INFOS DOS CLIENTES*/}
				<Row bsClass="row centered-row">
					<Col md={6}>
					  <Row bsClass="row centered-row" >
							<Col md={12}>
								<Link to="/home/pet">
									<Button bsStyle="primary full-button" >
										PET
									</Button>
								</Link>	
							</Col>					
						</Row>
					</Col>
					<Col md={6}>
						<Row bsClass="row centered-row" >
							<Col md={12}>
								<Link to="/home/dieta">
									<Button bsStyle="primary full-button" >
										DIETA
									</Button>
								</Link>	
							</Col>					
						</Row>
					</Col>
				</Row>
				{/* FIM DO ROW NAV */}
			</Col>
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