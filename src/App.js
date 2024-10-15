import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';
import './styles/Main.scss';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <header className='navbar'>
          <h1>Project Management Tool</h1>
        </header>

        <main className='page-section'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/project/:id' element={<ProjectDetails />} />
          </Routes>
        </main>

        <footer className='footer'>
          <p>
            &copy; {new Date().getFullYear()} Project Management Tool. All rights reserved. |
            <a href='#'> Privacy Policy</a>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
