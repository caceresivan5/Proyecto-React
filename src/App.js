
import { Component } from 'react';
import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';


class App extends Component{
  render(){
    return(
     <div className = "root"> 

       <h1>Game Store</h1>

      <NavBar/> {/* Componente menu */}

      <ItemListContainer greeting = "Hola Soy un ItemListContainer "/> {/* Componente que pasa una props */}
      <ItemDetailContainer/>

     </div>

    );
  }
}

export default App;