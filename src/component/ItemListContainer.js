import React, { useEffect, useState } from 'react';
import ItemCount from '../component/ItemCount'



//array de juegos

const juegosArray = [
    { id: 1, nombre:'Uncharted 4', portada:'https://as.com/meristation/imagenes/2015/06/03/noticia/1433346420_888162_1532451997_sumario_normal.jpg', consola: 'PS4', precio: '5400'},
    { id: 2, nombre:'Destiny', portada:'https://i.blogs.es/24080b/destiny-ps4/450_1000.jpg', consola: 'PS4', precio: '4500'},
    { id: 3, nombre:'Modern-Warfare', portada:'https://uvejuegos.com/img/caratulas/62807/Call-of-Duty-Modern-Warfare-PS4-EU.jpg', consola: 'PS4', precio: '6000'},
    { id: 4, nombre:'Resident Evil 3', portada:'https://www.ecured.cu/images/b/b4/RE_3_Remake_Portada_PS4.jpg', consola: 'PS4', precio: '8500'}
  ];

  const getJuegos = new Promise((res, rej)=>{
      //acciones asincronicas
      let respuestas = '200'
      if(respuestas === '200'){
          setTimeout(()=>{
            res(juegosArray)
          },3000)
          
      }else{
          rej('404..')
      }
  })
/* greeting es la props que recibe del padre.la informacion que trae la inyecta en el parrafo */
const ItemListContainer = ( { greeting } ) => { 
    const [juegos, setJuegos] = useState([])
    console.log(juegos)

    const [cargando, setCargando] = useState(true)

//creo un alert
const onAdd = (cantidad)=>{
    alert(`AGREGASTE ${cantidad} PRODUCTOS AL CARRITO`)
}
 useEffect(()=>{
    getJuegos
    .then(dataJuegos =>{
        setJuegos(dataJuegos)
    })
    .catch(error => console.log(error))
    .finally(()=>setCargando(false))

 }, [])
    return (
        <div>
            <p> { greeting } </p>
            <div className='cardJuegos'>
            { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : juegosArray.map(juego => <div key = {juego.id} className = 'card w-25 mt-3 cardJuego ' > 
            <div className = 'card-header cardNombre'>{juego.nombre}</div>
            <div className = 'card-body'> 
            <img src = {juego.portada} className='w-100' alt='portada'></img>
            </div>
            <div className = 'card-footer'>
                <button className='btn btn-outline-dark  btn-block' onClick={()=>setCargando(!cargando)}>DETALLE</button>
            </div>
            
            
            
            </div>)}
            </div>

            <ItemCount stock = { 10 } initial = { 1 } onAdd = {onAdd} />
        </div>
            
    )

}
export default ItemListContainer