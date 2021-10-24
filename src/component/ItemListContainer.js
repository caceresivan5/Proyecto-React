import React, { useEffect, useState } from 'react';
import  ItemList  from '../component/ItemList';
import { useParams } from 'react-router'
import { getFirestore } from '../service/getFirebase';

/* greeting es la props que recibe del padre.la informacion que trae la inyecta en el parrafo */
 function ItemListContainer ( { greeting} ) { 
    const [juegos, setJuegos] = useState()

    const [cargando, setCargando] = useState(true)

    const { idConsola } = useParams() //para capturar la URL
  
 useEffect(()=>{

    if (idConsola) {
        
        const BaseDeDatos = getFirestore()
        BaseDeDatos.collection('items').where('consola', '==', idConsola).get()
        .then(resp => {
            setJuegos(resp.docs.map(juego => ( {id: juego.id, ...juego.data()})))
        })
        .catch(error => console.log(error))
        .finally(()=>setCargando(false))
    }else{
        const BaseDeDatos = getFirestore()
        BaseDeDatos.collection('items').get()
        .then(resp => {
            setJuegos(resp.docs.map(juego => ( {id: juego.id, ...juego.data()})))
        })
        .catch(error => console.log(error))
        .finally(()=>setCargando(false))

    }

 }, [ idConsola ]);

    return (
        <div>
            <center> 
            <h2> { greeting } </h2>
            </center>
            <div className='cardJuegos'>
            { cargando
            ? 
            <h2 className='cardNombre'>CARGANDO...</h2>
            : 
            < ItemList juegos = {juegos} />
            }
            </div>   
        </div>
            
    )
}
export default ItemListContainer