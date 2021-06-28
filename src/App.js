/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { Route } from "react-router";
import HomePage from "./pages/HomePage";
import DictionaryPage from "./pages/DictionaryPage";

const Documentation = () => <h1 className="title">Documentation</h1>;
const About = () => <h1 className="title">About</h1>;
const Apis = () => <h1 className="title">Apis</h1>;

const MyNav = ({}) => (
  <Nav>
    <div className="navbar-end">
      <Nav.Link to="/" exact>
        Home
      </Nav.Link>
      <Nav.Link to="/dictionary">Dictionary</Nav.Link>
      <Nav.Link to="/documentation">Documentation</Nav.Link>
      <Nav.Link to="/apis">APIs</Nav.Link>
      <Nav.Link to="/about">About</Nav.Link>
      <div className="navbar-item">
        <div className="buttons">
          <Nav.Link to="/signin" className="button is-primary">
            Sign up
          </Nav.Link>
          <Nav.Link to="login" className="button is-light">
            Log in
          </Nav.Link>
        </div>
      </div>
    </div>
  </Nav>
);
export default function App() {
  return (
    <div className="app-theme">
      <MyNav />
      <section className="section">
        <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/dictionary" component={DictionaryPage} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/about" component={About} />
          <Route path="/apis" component={Apis} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
