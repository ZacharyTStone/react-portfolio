import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import "./translations/i18n.js";
import { inject } from "@vercel/analytics";
import { AppProvider } from "./context/appContext";

inject();

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
