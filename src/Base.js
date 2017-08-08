import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroWraper from './components/acesso/CadastroComponent';

class Base extends Component {

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/cadastrar" component={CadastroWraper} />
			</Switch>
		);
	}
}

export default Base;
