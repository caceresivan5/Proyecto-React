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
        <div> {/* creo el HTML */}
            <div className = "contadorCarrito">
                <button  onClick = {restar} > - </button> 
            <label >{count}</label>
            <button  onClick = {sumar} > + </button>
               
            </div>

            <div className = "BotonItemCount">
           

            { cambiarBoton 
            ?  
            <button onClick = {agregarCarrito} > AGREGAR AL CARRITO </button>
            : 
            <div className='BotonFinalizarSeguir'>
            <Link to={'/cart'} >
             <button> FINALIZAR COMPRA </button>
            </Link>
            <Link to={'/'} >
             <button> SEGUIR COMPRANDO </button>
            </Link>
            </div>
            }
            
            </div>

        </div>
    )
}
export default ItemCount