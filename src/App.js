
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // PARA IMPORTAR EL ENRUTADO

import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';


function App (){

    return(
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

      <Route exact path = '/detalle' component = {ItemDetailContainer}/> {/* SEGUNDA FORMA PARA DEFINIR EL ENRUTADO */}

      </Switch>
     </div>

     </Router>
    );
  }


export default App;