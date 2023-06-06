import './App.css';
import { HomePage } from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Experiencia } from './pages/Aexperiencia';
import { Setores } from './pages/setores';
import { Info } from './pages/Info';
import { Ingresso } from './pages/Ingresso';
import { DetalhesDoIngresso } from './pages/DetalhesDoIngresso';


function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/experiencia' element={<Experiencia/>}/>
          <Route path='/mapa' element={<Setores/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/ingresso' element={<Ingresso/>}/>
          <Route path="/ingresso/1" element={<DetalhesDoIngresso/>} />
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
