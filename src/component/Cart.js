import React from "react";
import { useCartContext } from "./cartContext";


const Cart = () => {
 const {carList} = useCartContext() 
 console.log(carList)
    return(
        <div>
            <center>
                { carList.map(Item => <h2> {Item.item.nombre} </h2>) }
            </center>
        </div>
    )
}

export default Cart