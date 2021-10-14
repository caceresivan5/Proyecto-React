

import { useCartContext } from "./cartContext";

import ItemCount from "./ItemCount";


const ItemDetail = ({DetalleJuego})  =>  {
 
    const { addToCart } = useCartContext()
    
    

    const onAdd = (cantidad)=>{
        addToCart( {itemCart: DetalleJuego, Cantidad: cantidad} )
    }
    return(
        <div>
    
            <div className ='detalleJuegos'> 

            <div key = {DetalleJuego.id} className = 'card w-25 mt-3 cardJuegoDetalle ' > 
        <div className = 'card-header  mt-3 cardNombre'>Detalle</div>
        <div className = 'card-body'> 
        <img src = {DetalleJuego.portada} className='imagenDetalle' alt='portada'></img>
        <p> Nombre : {DetalleJuego.nombre}</p>
            <p> Consola : {DetalleJuego.consola}</p>
            <p> Precio : {DetalleJuego.precio}</p>
        </div>
        <ItemCount stock = { 5 } initial = { 1 } onAdd = {onAdd} />
        </div>
            </div>

        </div>
    )
}
export default ItemDetail