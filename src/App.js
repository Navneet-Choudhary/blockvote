import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' 

import Home from './Components/Home'
import NewPoll from './Components/NewPoll';
import PollingStation from './Components/PollingStation';

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')
import vote from './assets/vote.png'


export default function App() {
    return(<Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/"><img src="https://cdn-icons-png.flaticon.com/512/927/927295.png" height={80} width={80}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/NewPoll">New Poll</Nav.Link>
        <Nav.Link onClick={window.accountId===''?login:logout}>{window.accountId===""? "Login" : window.accountId}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/PollingStation'>
        <PollingStation />
      </Route>
      <Route exact path='/NewPoll'>
        <NewPoll />
      </Route>
    </Switch>


    </Router>
    
  );
  }