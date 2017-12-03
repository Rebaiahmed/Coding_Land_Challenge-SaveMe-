import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar,NavItem, Nav ,MenuItem } from 'react-bootstrap';
// First we import some modules...
import { BrowserRouter } from 'react-router-dom'


import  Patients from './Patients';
import Add  from './Add';

import { Router, Route, IndexRoute,Switch,Redirect } from 'react-router'




class App extends Component {


constructor(props)
{
  super(props);
}


  render() {
    return (
      <div className="App">
         <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Diabeti</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
     
      <Nav pullRight>
        <NavItem eventKey={1} href="/add">Ajouter Patient </NavItem>
        <NavItem eventKey={2} href="/users">Consulter les Patients</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 

<div className="container">

<Switch>
<Route path="/add" component={Add} />
<Route path="/users" component={Patients} />
<Redirect to="/add" />
</Switch>

</div>  


      </div>
    );
  }
}

export default App;
