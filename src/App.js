import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Timeline from "./components/pages/Timeline";
import Achievements from "./components/pages/Achievements";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/pages/Gallery";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/blog" component={Blog} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
