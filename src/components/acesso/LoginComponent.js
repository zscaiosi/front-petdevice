import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {postLoginRequest} from '../../actions/loginActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  align-content: flex-start;
  padding: 10px;
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px;
`

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: '',
      pswd: '',
      errorMessage:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( this.props.isPostingLogin === true && nextProps.postLoginSuccess !== null ){
      this.setState({
        errorMessage: ''
      });
    }
  }

  handleInputChange(e){
    let name = e.target.name;
    let value = e.target.value;
    //console.log('Changed input', value);

    this.setState({[name]: value});
  }

  handleSubmit(){
    this.props.postLoginRequest({ username: this.state.login, password: this.state.password });
  }

  render(){
    return(
      <DivWrapper>
        <form onSubmit={event => event.preventDefault()}>
          <Input style={{order: '1'}}>
            <label htmlFor='login' >Login:</label>
            <input id="login" name="login" type='text' value={this.state.login} onChange={event => this.handleInputChange(event)} />
          </Input>
          <Input style={{order: '2'}}>
            <label htmlFor='login' >Senha:</label>
            <input id="password" name="pswd" type='password' value={this.state.pswd} onChange={event => this.handleInputChange(event)} />
          </Input>
          <button onClick={this.handleSubmit} type="submit">Entrar</button>
          <Link to="/cadastrar" > Cadastrar </Link>
        </form>
        { this.props.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> : null }
      </DivWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLogin: state.login.isPostingLogin,
    postLoginSuccess: state.login.postLoginSuccess
  }
}

export default connect(mapStateToProps, {postLoginRequest})(Login);
