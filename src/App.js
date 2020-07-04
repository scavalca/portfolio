import React from "react";
import Navbar from "./components/home/Home/Navbar";
import Introduction from "./components/home/Home/Introduction";
import PortfolioLinks from "./components/home/Home/PortfolioLinks";
import ProfileImage from "./components/home/Home/ProfileImage";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <Introduction />
    <PortfolioLinks />
    <ProfileImage />
  </div>
);

export default App;
