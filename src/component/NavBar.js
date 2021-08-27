//Bootstrap - Ademas debo instalarlo por terminal
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const NavBar = () =>{
    return (
        <div>
     
   <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  
  <NavbarToggle/>
  <NavbarCollapse className="justify-content-center">
  <Nav >
  <Nav.Link href="#">HOME</Nav.Link>
     <NavDropdown title="PRODUCTOS" >
       <NavDropdown.Item href="#">ZAPATILLAS</NavDropdown.Item>
       <NavDropdown.Item href="#">CAMPERAS</NavDropdown.Item>
       <NavDropdown.Item href="#">REMERAS</NavDropdown.Item>
     </NavDropdown>
     <Nav.Link href="#">OFERTAS</Nav.Link>
     <Nav.Link href="#">CONTACTOS</Nav.Link>
     
   </Nav>
  </NavbarCollapse>
  
 </Navbar>

        </div>
    )
}
export default NavBar;