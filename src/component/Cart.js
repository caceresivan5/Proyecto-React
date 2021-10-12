import React from "react";
import { useCartContext } from "./cartContext";



const Cart = () => {
 const {carList} = useCartContext() 
 console.log(carList)
    return(
        <div>
            <center>
                <h2>CARRITO DE COMPRAS</h2>
                <div className='tabla'>
                <th>
                { carList.map(Item => 

                <div key={Item.id} > 
                <h2> {Item.itemCart.nombre} </h2> 
                </div>) }
                </th>
                <th>
                { carList.map(Item => 
                <div key={Item.id} >
                <img src = {Item.itemCart.portada} className='imagenDetalle' alt='portada'></img>
                </div>
                ) }
                </th>

                
                
                </div>
                
                
            </center>
        </div>
    )
}

export default Cart