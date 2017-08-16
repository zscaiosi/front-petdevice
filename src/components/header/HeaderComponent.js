import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`

const ContentVertDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 320px;

  @media(min-width: 768px){
    width: 600px;
  } 
`

const ContentHorizDiv = styled.div`
  height: 25px; 
  width: 320px;
  justify-content: center;
  font-size: 13px;
  color: white;

  b{
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: white;
  }

  @media(min-width: 768px){
    width: 600px;
    font-size: 21px;

    b{
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`

class Header extends Component {

  constructor(props){
    super(props);

    this.handleLogut = this.handleLogut.bind(this);
  }

  handleLogut(){
    localStorage.clear();
    document.location.reload();
  }

  render(){
    return(
      <HeaderComponent>
        <ContentVertDiv>
          <ContentHorizDiv>
            <b> <Link to="/home/pet" >PETS</Link> </b>
            <b> <Link to="/home/dieta" >DIETAS</Link> </b>
            <b> <Link to="/home/device" >DEVICES</Link> </b>
            <b> <Link to="/home/cliente" >CLIENTE</Link> </b>
            <b onClick={this.handleLogut} > Logout </b>
          </ContentHorizDiv>
        </ContentVertDiv>
      </HeaderComponent>
    );    
  }
}

export default Header;
