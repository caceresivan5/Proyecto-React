//Bootstrap - Ademas debo instalarlo por terminal
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CarWidget';



const NavBar = () =>{
    return (
        <div>
     
   <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  
  <NavbarToggle/>
  <NavbarCollapse className="justify-content-center">
  <Nav >
   
    <Nav.Link href="/">HOME</Nav.Link>
     <NavDropdown title="CONSOLA" >

       <NavDropdown.Item href="/consola/PS4">PS4</NavDropdown.Item>
       <NavDropdown.Item href="/consola/PS3">PS3</NavDropdown.Item>
       <NavDropdown.Item href="/consola/PC">PC</NavDropdown.Item>

     </NavDropdown>
     <Nav.Link href="#">CONTACTOS</Nav.Link>
    
   </Nav>
  </NavbarCollapse>
  
  <CartWidget/> {/* CARRITO DE COMPRAS */}
  
 </Navbar>


        </div>
    )
}
export default NavBar;