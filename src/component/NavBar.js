//Bootstrap - Ademas debo instalarlo por terminal
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CarWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from './cartContext';


export const NavBar = (props) =>{
  const EstilosLink = {
    textDecoration:'none',
    margin: 'auto 1rem',
    color:'white',
    fontSize:'1.5rem'
  }
  const{count} = props
  const { AcumuladorCart } = useCartContext()
    return (
        <div>
     
   <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  <NavbarToggle/>
  <NavbarCollapse className="justify-content-center">
  <Nav >
   
      <div className='d-flex'>
              
      <Link exact to='/' style={EstilosLink} >HOME</Link>

       <Link exact to='/consola/PS4' style={EstilosLink}>PS4</Link>
              
       <Link exact to='/consola/PS3' style={EstilosLink}>PS3</Link>
           
       <Link exact to='/consola/PC' style={EstilosLink}>PC</Link>
       </div>
    
   </Nav>
  </NavbarCollapse>

  <Link exact to='/cart'>
  <CartWidget count = {count} /> {/* CARRITO DE COMPRAS */}
   <h3 >{AcumuladorCart() }</h3>
  </Link>
  
 </Navbar>

        </div>
    )
}
export default NavBar;