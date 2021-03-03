import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home.jsx';

const App = () => {
  return (
    <Router>
      <Route 
        path = '/' exact
        component = {Home}
      />
    </Router>
  );
};

export default App;