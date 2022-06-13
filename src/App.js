import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import ProjectPage from "./pages/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPrepPage from "./pages/TestPrepPage";
import awsccp from "./pages/testPrep/awsccp";
import az900 from "./pages/testPrep/az900";
import sat from "./pages/testPrep/sat";
import nclex from "./pages/testPrep/nclex";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/testprep" component={TestPrepPage} exact />
            <Route path="/testprep/awsccp" component={awsccp} exact />
            <Route path="/testprep/az900" component={az900} exact />
            <Route path="/testprep/sat" component={sat} exact />
            <Route path="/testprep/nclex" component={nclex} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/projects" component={ProjectPage} exact />
            <Route
              path="/projects/netflix-clone"
              component={ProjectListPage}
              exact
            />
            <Route path="/articles" component={ArticlesListPage} exact />
            <Route path="/articles/:name" component={ArticlePage} exact />
            <Route component={NotFoundPage} exact />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
