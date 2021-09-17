import React, { useEffect, useState } from 'react';
import { getJuegosUno } from '../utils/Mock';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
    const [DetalleJuego, setDetalleJuego] = useState({})
    useEffect(()=>{

       getJuegosUno //promesa
       //para saber que me devuelve la promesa .then(resp => console.log(resp))

       .then(resp => setDetalleJuego(resp))
     }, [])

    return(
        <div>
            <ItemDetail DetalleJuego = {DetalleJuego}/>
        </div>
    )
}
export default ItemDetailContainer