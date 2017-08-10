import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroWraper from './components/acesso/CadastroComponent';
import ClienteDashboard from './components/scenes/ClienteDashboard';

class Base extends Component {

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/cadastrar" component={CadastroWraper} />
					<Route path="/home/cliente" component={ClienteDashboard} />
				</Switch>				
			</div>
		);
	}
}

export default Base;
