import {useState  } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({DetalleJuego}) =>{

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const onAdd = (cantidad)=>{
        console.log(cantidad)
        setCantidadSeleccionada(cantidad)
    }
    console.log(cantidadSeleccionada)
    return(
        <div>
    
            <div className ='detalleJuegos'> 

            <div key = {DetalleJuego.id} className = 'card w-25 mt-3 cardJuegoDetalle ' > 
        <div className = 'card-header  mt-3 cardNombre'>ItemDetail</div>
        <div className = 'card-body'> 
        <img src = {DetalleJuego.portada} className='imagenDetalle' alt='portada'></img>
        <p> Nombre : {DetalleJuego.nombre}</p>
            <p> Consola : {DetalleJuego.consola}</p>
            <p> Precio : {DetalleJuego.precio}</p>
        </div>
       
        </div>

            
            
            </div>
            <ItemCount stock = { 10 } initial = { 1 } onAdd = {onAdd} />
        </div>
    )
}
export default ItemDetail