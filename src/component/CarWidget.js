
import carrito from '../img/carrito2.png';
import face from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twit from '../img/gorjeo.png';
import { useCartContext } from './cartContext';


const CartWidget = () => {
    const { AcumuladorCart } = useCartContext()
    return (
        <>
        <div className='logosCabecera'>
        <div>

        <img className="CarritoCompras" src = { face } alt = "imagen carrito" />
        </div>
        <div>
            
        <img className="CarritoCompras" src = { instagram } alt = "imagen carrito" />
            </div>
            <div>
            
        <img className="CarritoCompras" src = { twit } alt = "imagen carrito" />
            </div>
        <div className='Carycontador'>
            
        <a href ="/cart">
        <h3  >{AcumuladorCart() }</h3>
            <img className="CarritoCompras" src = { carrito } alt = "imagen carrito" />
        </a>
            </div>
        </div>
        </>
    )
}
export default CartWidget
