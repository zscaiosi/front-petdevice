import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroWraper from './components/acesso/CadastroComponent';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './components/header/HeaderComponent';
import Home from './components/scenes/HomeScene';

class Base extends Component {

	render() {
		return(
			<div className="container">
				{ localStorage.getItem("login") === null ?  <Redirect to="/" /> : (JSON.parse(localStorage.getItem("login")).login.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> :  <Redirect to="/" />) }
				<div className="row">
					<div className="col-lg-2"></div>
					<div className="col-lg-8">
						<Route path="/home" component={Header} />
					</div>
					<div className="col-lg-2"></div>
				</div>
				<div className="row">
					<Switch>	
						<Route exact path="/" component={Login} />
						<Route path="/cadastrar" component={CadastroWraper} />
						<Route path="/home" component={Home} />
					</Switch>					
				</div>
			</div>
				
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
