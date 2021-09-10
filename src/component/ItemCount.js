import {useState} from "react";

//creo el ItemCount y le paso los parametros
const ItemCount = ( { stock, initial, onAdd} ) =>{
    const [count, setCount] = useState(initial)
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
    }
    return(
        <div> {/* creo el HTML */}
            <h1> ItemCount</h1>
            
            <div className = "contadorCarrito">
            <label >{count}</label>
            </div>

            <div className = "BotonItemCount">
            <button onClick = {sumar} > + </button>
            <button onClick = {agregarCarrito} > AGREGAR AL CARRITO </button>
            <button onClick = {restar} > - </button>
            </div>

        </div>
    )
}
export default ItemCount