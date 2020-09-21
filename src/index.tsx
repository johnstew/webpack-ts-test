import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const root = document.createElement("div");
document.querySelector("body")?.appendChild(root);

ReactDOM.render(<App />, root);
