import React from "react";
import ReactDOM from "react-dom";

import Nav from "./Partials/Nav";
import App from "./App";
import Footer from "./Partials/Footer";

ReactDOM.render(<Nav />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
