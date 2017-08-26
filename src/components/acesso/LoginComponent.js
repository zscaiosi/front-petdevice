import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {postLoginRequest} from '../../actions/loginActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 100px;

  @media(min-width: 768px){
    margin-top: 150px;
  }
`

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  max-width: 350px;
  background-color: rgba(90,95,190, 0.5);
  border-radius: 30px;

  label{
    font-size: 25px;
    color: rgb(255, 255, 255);
  }

  button{
    font-size: 25px;
    color: rgb(255, 255, 255);
    background-color: rgba(90,255,150, 0.9);
    border-radius: 15px;
    border: 0px;   
  }

  a{
    color: white;
    text-decoration: none;
    margin: 5px;
  }

  input{
    border-radius: 10px;
    font-size: 15px;
    height: 20px;
  }

  @media(min-width: 768px){
    height: 350px;
    width: 450px;

  }
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
  justify-content: center;
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
        errorMessage: nextProps.postLoginError.response.data
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
      this.props.postLoginRequest({ username: this.state.login, psw: this.state.pswd });

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

        <div className="d-flex flex-row justify-content-center mt-5" >
          <form onSubmit={event => event.preventDefault()} className="mt-5">
            <div className="form-group">
              <label htmlFor='login' >Login:</label>
              <input className="form-control" id="login" name="login" type='text' value={this.state.login} onChange={event => this.handleInputChange(event)} />
            </div>
            <div className="form-group">
              <label htmlFor='login' >Senha:</label>
              <input className="form-control" id="password" name="pswd" type='password' value={this.state.pswd} onChange={event => this.handleInputChange(event)} />
            </div>
            <ActionsColumnSection>
              <button className="btn btn-default" onClick={this.handleSubmit} type="submit">Entrar</button>

              <Link to="/cadastrar" style={{ textAlign: 'center' }} > Cadastrar </Link>
        
              {this.state.errorMessage !== "" ? <BadMessageArticle> {this.state.errorMessage} </BadMessageArticle> : null}
            </ActionsColumnSection>
          </form>
          { this.props.postLoginSuccess !== null ? <Redirect to="/home/cliente" /> : null }
        </div>
 
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
