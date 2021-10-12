//Bootstrap - Ademas debo instalarlo por terminal
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CarWidget';
import { Link } from 'react-router-dom';



export const NavBar = (props) =>{
  const{count} = props
    return (
        <div>
     
   <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  
  <NavbarToggle/>
  <NavbarCollapse className="justify-content-center">
  <Nav >
   
    <Link exact to='/'>HOME</Link>
     <NavDropdown title="CONSOLA" className='Secciones' >
       <Link exact to='/consola/PS4'>PS4</Link>
      
       <Link exact to='/consola/PS3'>PS3</Link>
       
       <Link exact to='/consola/PC'>PC</Link>

     </NavDropdown>
     <Nav.Link href="#">CONTACTOS</Nav.Link>
    
   </Nav>
  </NavbarCollapse>

  <Link exact to='/cart'>
  <CartWidget count = {count}/> {/* CARRITO DE COMPRAS */}
  </Link>
  
 </Navbar>


        </div>
    )
}
export default NavBar;