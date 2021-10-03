import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // PARA IMPORTAR EL ENRUTADO
import { useState } from 'react';
import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
import CartContextProvider from './component/cartContext';


const categoriasContext = [
  {nombre:'Remeras', id:'remerasNegras', Descripcion:'esto es una remera'},
  {nombre:'Camperas', id:'camperasAzules', Descripcion:'esto es una Campera'},
]

export const contextApp = createContext('Dato') //para crear un contexto y saltear la regla de unidireccional- por defecto va a inicializar con el valor de dato

function App (){
  const [state, setState] = useState(categoriasContext)

  function setearState(itemContext){ //estoy creando una funcion para luego setear setState
    setState(itemContext)
  }

    return(

      <CartContextProvider>


      
      <contextApp.Provider value= { {state,setearState} }> {/* AHORA state ES UN CONTEXTO GLOBAL */}

      
      <Router> 

     <div className = "root"> 

       <h1>Game Store</h1>

      <NavBar/> {/* Componente menu */}

      <Switch> 

        <Route exact path = '/'> 
      <ItemListContainer greeting = "Hola Soy un ItemListContainer "/> 
      </Route>

      <Route exact path='/consola/:idConsola'>
        <ItemListContainer/>
      </Route>

      

      <Route exact path='/consola/:idConsola'>
        <ItemListContainer/>
      </Route>
      <Route exact path = '/item/:idItem' component = {ItemDetailContainer}/> {/* SEGUNDA FORMA PARA DEFINIR EL ENRUTADO */}
      <Route exact path = '/cart' component = {Cart} />
      </Switch>
     </div>

     </Router>
     </contextApp.Provider>
     </CartContextProvider>
    );
  }


export default App;