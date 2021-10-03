import {useState, useContext  } from "react";
import { contextApp } from "../App";
import { useCartContext } from "./cartContext";

import ItemCount from "./ItemCount";


function ItemDetail  ({DetalleJuego}) {
    

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

   
    const {addToCart} = useCartContext()
    
    const {state} = useContext(contextApp)
    const onAdd = (cantidad)=>{
        setCantidadSeleccionada(cantidad)
        addToCart( {item: DetalleJuego, Cantidad: cantidad} )
    }
    
    return(
        <div>
    
            <div className ='detalleJuegos'> 

            <div key = {DetalleJuego.id} className = 'card w-25 mt-3 cardJuegoDetalle ' > 
        <div className = 'card-header  mt-3 cardNombre'>ItemDetail</div>
        <div className = 'card-body'> 
        <img src = {DetalleJuego.portada} className='imagenDetalle' alt='portada'></img>
        <p> Nombre : {DetalleJuego.nombre}</p>
            <p> Consola : {DetalleJuego.consola}</p>
            <p> Precio : {DetalleJuego.precio}</p>
        </div>
        <ItemCount stock = { 10 } initial = { 1 } onAdd = {onAdd} />
        </div>
            </div>

        </div>
    )
}
export default ItemDetail