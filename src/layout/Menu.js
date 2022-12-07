import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Home from '../pages/Home/Home';
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteCadastro from "../pages/Cliente/ClienteCadastro";
import UsuarioList from "../pages/Usuario/UsuarioList";
import UsuarioCadastro from "../pages/Usuario/UsuarioCadastro";
import ImovelCadastro from "../pages/Imovel/ImovelCadastro";
import ImovelList from "../pages/Imovel/ImovelList";

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
              <NavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="/usuarioList">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/usuarioCadastro">Cadastrar</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Imóvel" id="basic-nav-dropdown">
                <NavDropdown.Item href="/imovelList">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/imovelCadastro">Cadastrar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clienteList" element={<ClienteList/>}></Route>
        <Route path="/clienteCadastro" element={<ClienteCadastro/>}></Route>
        <Route path="/usuarioList" element={<UsuarioList/>}></Route>
        <Route path="/usuarioCadastro" element={<UsuarioCadastro/>}></Route>
        <Route path="/imovelList" element={<ImovelList/>}></Route>
        <Route path="/imovelCadastro" element={<ImovelCadastro/>}></Route>
      </Routes>
    </Router>
  );
}

export default Menu;
