import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      app
    </div>
  );
}

export default App;
