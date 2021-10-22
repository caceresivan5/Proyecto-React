import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./cartContext";
import firebase from "firebase";
import 'firebase/firestore'
import { getFirestore } from "../service/getFirebase";

const Cart = () => {

    const [ datosFormulario, setdatosFormulario ] = useState({
        name: '',
        tel: '',
        mail: ''
    })

 const {carList, BorrarItemCarrito, precioTotal, CantidadProd,borrarCarrito} = useCartContext() 

 function cambioFormulario (e) {

     setdatosFormulario({
         ...datosFormulario,
         [e.target.name]: e.target.value
     })
 }
 const botonSubmit = (e)=> {
     e.preventDefault()
     let orden = {}
     orden.date = firebase.firestore.Timestamp.fromDate(new Date())
     orden.buyer = datosFormulario
     orden.items = carList.map(cartItem =>{
         const NombreJuego = cartItem.itemCart.nombre
         const idJuego = cartItem.itemCart.id
         const PrecioUnitario = cartItem.itemCart.precio
         
         return {idJuego, NombreJuego, PrecioUnitario}
        })
        orden.total = precioTotal();

     const BaseDeDatos = getFirestore()
     BaseDeDatos.collection('orders').add(orden)
     .then(resp => alert(`SU NUMERO DE ORDEN ES: ${resp.id}`) )
     .catch(err => console.log(err))
     .finally(()=>setdatosFormulario(
        {
            name: '',
            tel: '',
            mail: '',
           
        }
     ))
 }
    return(
        <div>
            <center className='carrito'>
                <h2>CARRITO DE COMPRAS</h2>
  
                { carList.map(Item => 
               
                <div key={Item.id} className='tabla' > 

                <th>
                    <div className='detallesCarrito'>
                    <img src = {Item.itemCart.portada} className='imagenDetalle' alt='portada'></img>
                 <p>Precio unitario: $ {Item.itemCart.precio}</p>
                 <p>Unidades: { CantidadProd(Item) }</p>  
                 <p>SubTotal: $ { (CantidadProd(Item))*(Item.itemCart.precio) }</p>
                <button onClick={()=>BorrarItemCarrito(Item)} >ELIMINAR</button>
                 </div>   
                </th>

                </div>) }

                 { (carList.length === 0) 
                 ?
                  <h3 className='totalCompra'> No hay Productos en el Carrito  </h3> 
                  :
                  <div>
               <h3 className='totalCompra'> Total de la Compra $ { precioTotal() }  </h3> 
                <div className='botonesCarrito'> 

                <button onClick={()=>borrarCarrito()} >BORRAR CARRITO</button>
                <Link to='/'>
                <button>GALERIA DE JUEGOS</button>
                </Link>
                
                </div>    
    <form 
    onSubmit = {botonSubmit}
    onChange ={cambioFormulario}
    >
        <input
        type='text'
        placeholder='INGRESE SU NOMBRE'
        name='name'
        value={datosFormulario.name}
        
        />
        <input
        type='text'
        placeholder='NUMERO DE CELULAR' 
        name='tel'
        value={datosFormulario.tel}
       
        />
        <input
        type='text'
        placeholder='INGRESE SU E-MAIL'
        name='mail'
        value={datosFormulario.mail}
        />
         <input
        type='text'
        placeholder='CONFIRME SU E-MAIL'
        name='mail2'
        
        />
        
    { (datosFormulario.mail === datosFormulario.mail2) 
                 ?
                 <button  className='finalizarCompra'>FINALIZAR COMPRA</button>
                 :
                 <p className='validarMail'>Complete Correctamente sus Datos para Finalizar la Compra</p> 
                }
                </form>
            
    </div> 
            }
            </center>
        </div>
    )


}


export default Cart