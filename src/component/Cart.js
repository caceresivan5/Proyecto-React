import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./cartContext";




const Cart = () => {
 const {carList, BorrarItemCarrito, precioTotal, CantidadProd,borrarCarrito} = useCartContext() 
 
    return(
        <div>
            <center className='carrito'>
                <h2>CARRITO DE COMPRAS</h2>
  
                { carList.map(Item => 
               
                <div key={Item.id} className='tabla' > 

                <th>
                    <div className='detallesCarrito'>
                    <img src = {Item.itemCart.portada} className='imagenDetalle' alt='portada'></img>
                 <p>Precio unitario: $ {Item.itemCart.precio}</p>
                 <p>Unidades: { CantidadProd(Item) }</p>  
                 <p>SubTotal: $ { (CantidadProd(Item))*(Item.itemCart.precio) }</p>
                <button onClick={()=>BorrarItemCarrito(Item)} >ELIMINAR</button>
                 </div>   
                </th>

                </div>) }

                 { (carList.length === 0) 
                 ?
                  <h3 className='totalCompra'> No hay Productos en el Carrito  </h3> 
                  : 
               <h3 className='totalCompra'> Total de la Compra $ { precioTotal() }  </h3> 
               }
                <div className='botonesCarrito'> 

                <button onClick={()=>borrarCarrito()} >BORRAR CARRITO</button>
                <Link to='/'>
                <button>GALERIA DE JUEGOS</button>
                </Link>
                
                </div>    
            </center>
        </div>
    )
}

export default Cart