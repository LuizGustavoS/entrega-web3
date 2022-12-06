import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Home from '../pages/Home/Home';
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteCadastro from "../pages/Cliente/ClienteCadastro";

function Menu() {
  return (
    <Router>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href='/'> Home</Nav.Link>
              <NavDropdown title="Cliente" id="basic-nav-dropdown">
                <NavDropdown.Item href="/clienteList">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/clienteCadastro">Cadastrar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clienteList" element={<ClienteList/>}></Route>
        <Route path="/clienteCadastro" element={<ClienteCadastro/>}></Route>
      </Routes>
    </Router>
  );
}

export default Menu;
