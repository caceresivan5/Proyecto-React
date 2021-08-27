
import { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar';

class App extends Component{
  render(){
    return(
     <div className = "root"> 

       <h1>Tienda Urbana</h1>
    
      <NavBar/>
      <h2>OFERTAS</h2>
     
     </div>

    );
  }
}

export default App;