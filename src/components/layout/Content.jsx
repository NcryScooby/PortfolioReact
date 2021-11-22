import React from "react";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import About from '../../views/menu/About'
import Home from '../../views/menu/Home'
import NotFound from '../../views/menu/NotFound'
import MyProjects from "../../views/menu/MyProjects";


const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <MyProjects />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;