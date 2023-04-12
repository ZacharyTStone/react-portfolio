import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import "./translations/i18n.js";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
