import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../component/ItemDetail';
import { getJuegos } from '../utils/Mock';



function ItemDetailContainer () {
    const [DetalleJuego, setDetalleJuego] = useState()
    const [cargando, setCargando] = useState(true)
   
   

    const { idItem } = useParams() //para capturar la URL
    useEffect(()=>{

        getJuegos
        .then((datadetalle) =>{
            if(idItem){
            const idFiltrado = datadetalle.filter((prod)=>(prod.id) === parseInt(idItem))
            
            setDetalleJuego(idFiltrado)
            
           
             }else{
                setDetalleJuego(datadetalle)
            }
        })
        .catch(error => console.log(error))
        .finally(()=>setCargando(false))
        
    
 }, [ idItem ]);
 

    return(
        <div>
          { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : DetalleJuego &&  <ItemDetail  DetalleJuego={DetalleJuego[0]} />}
        
        </div>
    )
}
export default ItemDetailContainer