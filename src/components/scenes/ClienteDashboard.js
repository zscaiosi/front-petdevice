import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeviceRequest, getPetRequest, getDietRequest } from '../../actions/deviceActions';
import { getUserRequest } from '../../actions/loginActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import paw from '../../style/paw-print-.svg';
import bowl from '../../style/bowl.svg';

const NavSection = styled.section`
	display: flex;
	flex-direction: row;

`

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
			<div className="container">
				<div className="row client-color rounded" style={{ margin: "20px" }}>
					<div className="d-flex flex-row col-md-4 justify-content-center">
						<div className="d-flex flex-column ">
							<div className="flex-row badge badge-primary mb-3">
								<b>Nome:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>E-mail:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Sexo:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>CPF:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Nascimento:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Logradouro:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Número:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Complemento:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Bairro:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>CEP:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b>Cidade:</b>
							</div>							
							<div className="flex-row badge badge-primary mb-3">
								<b>Estado:</b>
							</div>
							<div className="flex-row badge badge-primary mb-3">
								<b><Link to="/home/device" style={{ color: 'white' }} >Device:</Link></b>
							</div>
						</div>
					</div>
					<div className="d-flex flex-row col-md-4 justify-content-center">
						<div className="d-flex flex-column ">

							{
								this.props.getUserSuccess !== null ?
									Object.keys(this.props.getUserSuccess.data).map((k, i) => {
										if (i >= 1 && i !== 3) {
											return (
												<div className="flex-row badge badge-info mb-3" key={k + i} >
													<b> {this.props.getUserSuccess.data[k]} </b>
												</div>
											);
										}
									}) : null
							}

						</div>
					</div>
					<div className="d-flex flex-column col-md-4 justify-content-center">
						<div className="row flex-row justify-content-center" >
							<button className="btn btn-danger" type="button" style={{ cursor: 'pointer' }} ><Link style={{textDecoration: "none", color: "white"}} to="/home/update/clientes">Alterar</Link></button>
						</div>			
					</div>
				</div>
				{/*FIM DO ROW COM INFOS DOS CLIENTES*/}
				<div className="row nav-color rounded" style={{ margin: '20px' }}>
					<div className="col-md-12 d-md-flex flex-md-row justify-content-around">
						<NavSection>
							<Link to="/home/pet">
							<div className="alert alert-success d-flex flex-row">
								<img alt="pata" style={{ width: '60px', height: '60px' }} src={paw} />
								<p className="align-self-center ml-3">{ this.props.getPetSuccess !== null ? this.props.getPetSuccess.data.nome : "Buscando..." }</p>
							</div>
							</Link>
						</NavSection>
						<NavSection>
							<Link to="/home/dieta">
								<div className="alert alert-info d-flex flex-row">
									<img alt="pote" style={{ width: '60px', height: '60px' }} src={bowl} />
									<p className="align-self-center ml-3">{ this.props.getDietSuccess !== null ? this.props.getDietSuccess.data.descricao : "Buscando..." }</p>
								</div>
							</Link>
						</NavSection>						
					</div>
				</div>
				{/* FIM DO ROW NAV */}
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