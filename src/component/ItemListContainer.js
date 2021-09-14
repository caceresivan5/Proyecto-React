import React, { useEffect, useState } from 'react';
import ItemCount from '../component/ItemCount'
import { getJuegos } from '../utils/Mock';
import { juegosArray } from '../utils/Mock';
import  ItemList  from '../component/ItemList';




/* greeting es la props que recibe del padre.la informacion que trae la inyecta en el parrafo */
 function ItemListContainer ( { greeting } ) { 
    const [juegos, setJuegos] = useState([])
    console.log(juegos)

    const [cargando, setCargando] = useState(true)

//creo un alert
const onAdd = (cantidad)=>{
    alert(`AGREGASTE ${cantidad} PRODUCTOS AL CARRITO`)
}
 useEffect(()=>{
    getJuegos
    .then(dataJuegos =>{
        setJuegos(dataJuegos)
    })
    .catch(error => console.log(error))
    .finally(()=>setCargando(false))

 }, [])
    return (
        <div>
            <p> { greeting } </p>
            <div className='cardJuegos'>
            { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : < ItemList juegosArray = {juegosArray} /> }
            </div>

            <ItemCount stock = { 10 } initial = { 1 } onAdd = {onAdd} />
        </div>
            
    )
}
export default ItemListContainer