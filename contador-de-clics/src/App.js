import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton  from './componentes/Boton';
import Contador  from './componentes/Contador';
import {useState} from 'react';

function App() {

  const[numClics,setNumClics]= useState(0);

  const manejarClic=()=>{
    console.log("clic");
    setNumClics(numClics+1);
  }

  const reiniciarContador=()=>{
    console.log("reiniciar");
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />

        
        <Boton 
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
