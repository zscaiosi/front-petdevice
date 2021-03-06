import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {postLoginRequest, getUserRequest} from '../../actions/loginActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from './styles/logo.png';

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
      console.log(nextProps.postLoginSuccess, "------------");
      //console.log(nextProps.postLoginSuccess.user._id);
      this.setState({
        errorMessage: ''
      }, () => this.props.getUserRequest(this.props.postLoginSuccess.user._id));
    }

    if( this.props.isPostingLogin === true && nextProps.postLoginError !== null ){
      this.setState({
        errorMessage: nextProps.postLoginError ? nextProps.postLoginError.response.data.response : "ERROR!"
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
    console.log("PROPS E STATE", this.props, this.state);
    return(
      <div className="container">
        {/* LOGO */}
        <div className="row">
          <div className="col-md-12">
            <div className="panel-body">
              <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                <img alt="logo petdevice" src={logo}/>
              </div>
            </div>	
          </div>          
        </div>
        {/* FORMULÁRIO */}
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title"><strong>Digite seus Dados de Login</strong></h2>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={(e) => e.preventDefault()}>
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control" placeholder="E-mail" id="login" name="login" type='text' value={this.state.login} onChange={event => this.handleInputChange(event)} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="password" id="password" name="pswd" type='password' value={this.state.pswd} onChange={event => this.handleInputChange(event)} />
                    </div>

                    {/* Change this to a button or input when using this as a form */}
                    <button className="btn btn-default" style={{ cursor: 'pointer' }} onClick={this.handleSubmit} type="submit">{ this.props.isPostingLogin ? "Aguarde..." : "Entrar" }</button>

                    <Link to="/cadastrar" style={{ textAlign: 'center' }} > Cadastrar </Link>
      
                    {this.state.errorMessage !== "" ? <BadMessageArticle> E-mail ou senha incorretos. </BadMessageArticle> : null}                  
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, {postLoginRequest, getUserRequest})(Login);
