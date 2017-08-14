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

const ActionsColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

const BadMessageArticle = styled.article`
  flex-direction: row;
  background-color: rgba(255, 90, 90, 0.3);
  justify-content: center;
  text-align: center;
  padding: 5px;
  color: red;

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

    if( this.props.isPostingLogin === true && nextProps.postLoginError !== null ){
      this.setState({
        errorMessage: nextProps.postLoginError.response.data.response === "not found" ? "Credenciais inválidas!" : nextProps.postLoginError.response.data.response
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
    if( this.state.login !== "" && this.state.pswd !== "" ){
      this.props.postLoginRequest({ username: this.state.login, pswd: this.state.pswd });

      this.setState({
        errorMessage: ""
      })
    }else{
      this.setState({
        errorMessage: "Preencha os dois campos!"
      });
    }
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
          <ActionsColumnSection>
            <button onClick={this.handleSubmit} type="submit">Entrar</button>

            <Link to="/cadastrar" style={{ textAlign: 'center' }} > Cadastrar </Link>
      
            {this.state.errorMessage !== "" ? <BadMessageArticle> {this.state.errorMessage} </BadMessageArticle> : null}
          </ActionsColumnSection>
        </form>
        { this.props.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> : null }
      </DivWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLogin: state.login.isPostingLogin,
    postLoginSuccess: state.login.postLoginSuccess,
    postLoginError: state.login.postLoginError
  }
}

export default connect(mapStateToProps, {postLoginRequest})(Login);
