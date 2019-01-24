import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddNew from "./components/Add.js";
import Remove from "./components/Remove.js";
import Home from "./container/Home.js";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <Home />
            <div className="main-backgroud">
              <Route path="/Add" component={AddNew} />
              <Route path="/Remove" component={Remove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
