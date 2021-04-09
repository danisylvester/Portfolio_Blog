import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { Menu } from "./components/Menu/Menu.jsx";
import { BottomMenu } from "./components/BottomMenu/BottomMenu.jsx";
import { Home } from "./components/Home/Home.jsx";
import BlogPost from "./components/BlogPost/BlogPost.jsx";

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route path="/blogpost/:blogID" component={BlogPost}></Route>
        <Route path="/:id" component={Home}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <BottomMenu></BottomMenu>
    </>
  );
};

export default App;
