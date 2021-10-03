
import carrito from '../img/carrito.png';

const CartWidget = () => {
    return (
        <>
        <a href ="/cart">
            <img className="CarritoCompras" src = { carrito } alt = "imagen carrito" />
        </a>
        </>
    )
}
export default CartWidget
