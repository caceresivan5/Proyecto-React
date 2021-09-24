import React, { useEffect, useState } from 'react';

import { getJuegos } from '../utils/Mock';
import { juegosArray } from '../utils/Mock';
import  ItemList  from '../component/ItemList';
import { useParams } from 'react-router'




/* greeting es la props que recibe del padre.la informacion que trae la inyecta en el parrafo */
 function ItemListContainer ( { greeting } ) { 
    const [juegos, setJuegos] = useState([])
   console.log(juegos)

    const [cargando, setCargando] = useState(true)

    const { idConsola } = useParams() //para capturar la URL
    console.log(idConsola)


 useEffect(()=>{
     
        getJuegos
        .then((dataJuegos) =>{
            if(idConsola){
            const filtro = dataJuegos.filter((prod)=>prod.consola === idConsola)
            setJuegos(filtro)
            console.log(filtro)
           
             }else{
                 setJuegos(dataJuegos)
            }
        })
        .catch(error => console.log(error))
        .finally(()=>setCargando(false))
    
 }, [ idConsola ]);

    return (
        <div>
            <p> { greeting } </p>
            <div className='cardJuegos'>
            { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : < ItemList juegosArray = {juegosArray} /> }
            </div>

           
        </div>
            
    )
}
export default ItemListContainer