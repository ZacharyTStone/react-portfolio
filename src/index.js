import React from "react";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import "./translations/i18n.js";
import { inject } from "@vercel/analytics";
import { AppProvider } from "./context/appContext";
import { createRoot } from "react-dom/client";

inject();

console.log(
	"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
	"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
);

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
