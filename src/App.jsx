import { useEffect } from 'react';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Astros from './Components/Astros/Astros';
import Appbar from './Components/Appbar/Appbar';
import Apod from './Components/Apod/Apod';

import './App.css'
import { Route, Routes } from 'react-router-dom';

//Const. para simular usuario loggeado
const isLogged=true;
//Datos de usuario
const userData={
  name: 'Mari',
  lastName:'Castro',
  age:'25'
}

//Links en la navbar
const links=[
  {
    "name":'ASTROS',
    "link":'astros'
  },
  {
    "name":'APOD',
    "link":'apod'
  }
 
]

//Main ---ruta: /
//Astros---ruta:/astros
//APOD ---ruta: /apod

function App() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
      <Navbar 
        links={links}
        isLogged={JSON.parse(localStorage.login)}
      />
      <Routes>  
        <Route 
          path='/'
          element={<Main{...userData}/>}
        />
        <Route 
          path='/astros' 
          element={<Astros/>}
        />
        <Route
          path='/apod' 
          element={<Apod/>}
        />
      </Routes>

    </>
  )
}

export default App
