import React, { Component } from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import './App.scss';
import { Menu } from './components/Menu/Menu.jsx';
import { Home } from './components/Home/Home.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Blog } from './components/Blog/Blog.jsx';
import { Contact } from './components/Contact/Contact.jsx';

const App = () => {
  return (
      <Router>
        <Menu></Menu>
        <Projects></Projects>
        {/* { <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path='/blogposts' component={Blog}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch> } */}
      </Router>
  );
};

export default App;