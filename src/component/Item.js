import React from "react";
import { Link } from 'react-router-dom';

const Item = ({juego}) =>{
    const EstilosDetalle = {
        textDecoration:'none',
        margin: 'auto 1rem',
        fontSize:'1.3rem'
      }
    return(
        <div key = {juego.id} className = 'card  mt-3 cardJuego ' > 
        <div className = 'card-header cardNombre'>{juego.nombre}</div>
        <div className = 'card-body'> 
        <img src = {juego.portada} className='w-100' alt='portada'></img>
        </div>
        <div className = 'card-footer'>
            
            <button className='btn btn-outline-dark  btn-block ' >
                <Link to={`/item/${juego.id}`} style={EstilosDetalle}>
                DETALLE
                </Link>
            </button> 
              
        </div>
        
        </div>
    )
}
export default Item
