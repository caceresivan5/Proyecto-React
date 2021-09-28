import React from "react";


const Item = ({juego}) =>{
    return(
        <div key = {juego.id} className = 'card w-25 mt-3 cardJuego ' > 
        <div className = 'card-header cardNombre'>{juego.nombre}</div>
        <div className = 'card-body'> 
        <img src = {juego.portada} className='w-100' alt='portada'></img>
        </div>
        <div className = 'card-footer'>
            
            <button className='btn btn-outline-dark  btn-block' >
                <a href={`/item/${juego.id}`}>DETALLE</a>
            </button> 
            
           
        </div>
        
        </div>
    )
}
export default Item
