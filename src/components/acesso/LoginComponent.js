import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
  }

  handleInputChange(e){
    let name = e.target.name;
    let value = e.target.value;
    console.log('Changed input', value);

    this.setState({[name]: value});
  }

  handleSubmit(){
    console.log('POST REQUEST');
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
          <button type="submit">Entrar</button>
          <Link to="/cadastrar" > Cadastrar </Link>
        </form>
      </DivWrapper>
    );
  }
}

export default Login;
