import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = () => (
  <header className="Menu">
    <div className="nome">
      <h1>Fabrício Caldana Anelli</h1>
    </div>

    <nav>
      <ul className="nav__links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Quem sou Eu</Link>
        </li>
        <li>
          <Link to="/projects">Meus Projetos</Link>
        </li>
      </ul>
    </nav>
    
  </header>
);

export default Menu;
