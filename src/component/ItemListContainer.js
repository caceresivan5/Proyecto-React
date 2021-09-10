import React from 'react';
import ItemCount from '../component/ItemCount'

/* greeting es la props que recibe del padre.la informacion que trae la inyecta en el parrafo */
const ItemListContainer = ( { greeting } ) => { 

//creo un alert
const onAdd = (cantidad)=>{
    alert(`AGREGASTE ${cantidad} PRODUCTOS AL CARRITO`)
}
    return (
        <div>
            <p> { greeting } </p>

            <ItemCount stock = { 10 } initial = { 1 } onAdd = {onAdd} />
        </div>
            
    )

}
export default ItemListContainer