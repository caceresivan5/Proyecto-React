//Bootstrap - Ademas debo instalarlo por terminal
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CarWidget';
import { Link } from 'react-router-dom';


const NavBar = () =>{
    return (
        <div>
     
   <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  
  <NavbarToggle/>
  <NavbarCollapse className="justify-content-center">
  <Nav >
    <Link  to = '/'> 
    HOME
    </Link>
     <NavDropdown title="CONSOLA" >

       <Link to='/consola/PS4'> 
       PS4
       </Link>
       
       <Link to={`/consola/PS3`}> 
       PS3
       </Link>
       <Link to={`/consola/PC`}> 
       PC
       </Link>
       <NavDropdown.Item href="#">PS3</NavDropdown.Item>
       <NavDropdown.Item href="#">PC</NavDropdown.Item>
     </NavDropdown>
     <Link to='/categoria/OFERTAS'> 
       OFERTAS
       </Link>
     <Nav.Link href="#">CONTACTOS</Nav.Link>
    
   </Nav>
  </NavbarCollapse>
  
  <CartWidget/> {/* CARRITO DE COMPRAS */}
  
 </Navbar>


        </div>
    )
}
export default NavBar;