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
            <h1> ItemCount</h1>
            
            <div className = "contadorCarrito">
            <label >{count}</label>
            </div>

            <div className = "BotonItemCount">
            <button onClick = {sumar} > + </button>

            { cambiarBoton 
            ?  
            <button onClick = {agregarCarrito} > AGREGAR AL CARRITO </button>
            : 
            <Link to={'/cart'} >
             <button> FINALIZAR COMPRA </button>
            </Link>
            }
            
            <button onClick = {restar} > - </button>
            <div>
            <Link to={'/'} >
             <button> SEGUIR COMPRANDO </button>
            </Link>

            </div>
            </div>

        </div>
    )
}
export default ItemCount