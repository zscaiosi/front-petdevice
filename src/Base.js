import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroWraper from './components/acesso/CadastroComponent';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './components/header/HeaderComponent';
import Home from './components/scenes/HomeScene';
import { Grid, Row, Col, Well } from 'react-bootstrap';

class Base extends Component {

	render() {
		return (
			<Grid fluid>
				{localStorage.getItem("login") === null ? <Redirect to="/" /> : (JSON.parse(localStorage.getItem("login")).login.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> : <Redirect to="/" />)}
				<Well bsSize="large">
					<Row bsClass="show-grid">
						<Route path="/home" component={Header} />
					</Row>
					<Row bsClass="show-grid centered-row">
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/cadastrar" component={CadastroWraper} />
							<Route path="/home" component={Home} />
						</Switch>
					</Row>					
				</Well>
			</Grid>

		)
		// return (
		// 	<div id="base-container" >
		// 		{ localStorage.getItem("login") === null ?  <Redirect to="/" /> : (JSON.parse(localStorage.getItem("login")).login.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> :  <Redirect to="/" />) }
		// 		<section style={{flexDirection: 'column', display: 'flex', height: '100%', width: '100%'}} >
		// 			<Route path="/home" component={Header} />
		// 			{ /*Header SEMPRE estará presente*/ }

		// 		</section>
		// 	</div>
		// );
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.login.postLoginSuccess !== null ? state.login.postLoginSuccess.user : state.login.postLoginSuccess
	}
}

export default connect(mapStateToProps, null)(Base);
