import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroWraper from './components/acesso/CadastroComponent';
import ClienteDashboard from './components/scenes/ClienteDashboard';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Base extends Component {

	render() {
		console.log("LOCATION", this.props.location, localStorage);
		return (
			<div>
				{ localStorage.length === 0 ? <Redirect to="/" /> : <Redirect to="/home/cliente" /> }
				<Switch>
					
					<Route exact path="/" component={Login} />
					<Route path="/cadastrar" component={CadastroWraper} />
					<Route path="/home/cliente" component={ClienteDashboard} />
					<Route path="/home/pet" render={ () => { return <div>bb----bb---</div>  } } />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.login.postLoginSuccess !== null ? state.login.postLoginSuccess.user : state.login.postLoginSuccess
  }
}

export default connect(mapStateToProps, null)(Base);
