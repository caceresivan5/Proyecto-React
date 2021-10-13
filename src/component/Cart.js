import React from "react";
import { useCartContext } from "./cartContext";




const Cart = () => {
 const {carList, BorrarItemCarrito, precioTotal, CantidadProd} = useCartContext() 
 console.log(carList)
    return(
        <div>
            <center>
                <h2>CARRITO DE COMPRAS</h2>
  
                { carList.map(Item => 
                
                <div key={Item.id} className='tabla' > 
                
                <th> 
                <img src = {Item.itemCart.portada} className='imagenDetalle' alt='portada'></img>
                </th>

                <th> 
                <h3> {Item.itemCart.nombre} </h3> 
                </th>

                <th> 
                 <p>Precio unitario: $ {Item.itemCart.precio}</p>
                 <p>Unidades: {CantidadProd(Item)}</p>    
                </th>

                <th> 
                <button onClick={()=>BorrarItemCarrito(Item)} >Borrar</button>
                
                </th>

                </div>) }

                
                <h3 className='totalCompra'> Total de la Compra $ { precioTotal()} </h3> 
                
            
                
            </center>
        </div>
    )
}

export default Cart