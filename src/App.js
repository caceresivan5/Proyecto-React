
import { Component } from 'react';
import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';

class App extends Component{
  render(){
    return(
     <div className = "root"> 

       <h1>Tienda Urbana</h1>

      <NavBar/> {/* Componente menu */}

      <ItemListContainer greeting = "Hola Soy un ItemListContainer "/> {/* Componente que pasa una props */}
      
     </div>

    );
  }
}

export default App;