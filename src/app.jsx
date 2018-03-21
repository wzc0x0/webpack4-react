import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
const App = () => {
  return (
    <div>
      <p>React here!lalala</p>
      <p>React here!lalala</p>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
export default hot(module)(App)
