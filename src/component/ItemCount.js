import {useState} from "react";

import { Link } from "react-router-dom";

//creo el ItemCount y le paso los parametros
const ItemCount = ( { stock, initial, onAdd} ) =>{
    const [count, setCount] = useState(initial)

    const [cambiarBoton, setCambiarBoton] = useState(true)
    //creo una funcion para sumar
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
        
    }
     //creo una funcion para restar
    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const agregarCarrito = () =>{
        onAdd(count)
        setCambiarBoton(false)
    }
  
    return(
        <div> 
            <div className = "contadorCarrito">
                <button  onClick = {restar} > - </button> 
            <label >{count}</label>
            <button  onClick = {sumar} > + </button>
               
            </div>

            <div className = "BotonItemCount">
           
            { cambiarBoton 
            ?  
            <p className="volverGaleria2" onClick = {agregarCarrito} > AGREGAR AL CARRITO </p>
            : 
            <div className='BotonFinalizarSeguir'>
            <Link to={'/cart'} style={{ textDecoration: 'none' }}>
             <p className="volverGaleria2"> FINALIZAR COMPRA </p>
            </Link>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
             <p className="volverGaleria" > SEGUIR COMPRANDO </p>
            </Link>
            </div>
            }
            
            </div>

        </div>
    )
}
export default ItemCount