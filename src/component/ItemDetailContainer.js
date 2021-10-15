import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../component/ItemDetail';

import { getFirestore } from '../service/getFirebase';


function ItemDetailContainer () {
    const [DetalleJuego, setDetalleJuego] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idItem } = useParams() //para capturar la URL

    useEffect(()=>{

        if (idItem) {
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').doc(idItem).get()
            .then(res => {
            
                setDetalleJuego( { id: res.id, ...res.data()})
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }else{
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').get()
            .then(res => {
                setDetalleJuego( res.docs.map(juego => ({id: juego.id, ...juego.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }

 }, [ idItem ])
 

    return(
        <div>
          { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : DetalleJuego &&  <ItemDetail key={DetalleJuego} DetalleJuego={DetalleJuego} />}
        
        </div>
    )
}
export default ItemDetailContainer