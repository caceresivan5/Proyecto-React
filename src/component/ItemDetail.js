import React from "react";

const ItemDetail = ({DetalleJuego}) =>{

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
       
        </div>

            
            
            </div>
        </div>
    )
}
export default ItemDetail