import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Arsip from './pages/Arsip';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="app-container">
        <Navigation />
      <main>
        <Routes>
          <Route path='/*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/archive' element={<Arsip />} />
          <Route path='/notes/new' element={<Add />} />
          <Route path='/notes/:id' element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;