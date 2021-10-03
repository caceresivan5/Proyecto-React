import React from "react";
import { useCartContext } from "./cartContext";
import ItemCount from "./ItemCount";


const Cart = () => {
 const {carList} = useCartContext() 
 console.log(carList)
    return(
        <div>
            <center>
                <h2>CARRITO DE COMPRAS</h2>
                <div className='tabla'>
                <th>
                { carList.map(Item => <h2> {Item.item.nombre} </h2>) }
                </th>
                <th>
                { carList.map(Item => <img src = {Item.item.portada} className='imagenDetalle' alt='portada'></img>) }
                </th>
                
                </div>
                
                
            </center>
        </div>
    )
}

export default Cart