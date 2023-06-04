import React, { useReducer, useContext, useRef } from "react";
import reducer from "./reducer";
import { SET_THEME } from "./actions";

const initialState = {
	theme:
		// look at local storage for theme
		localStorage.getItem("theme") || "dark",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setTheme = (theme) => {
		dispatch({ type: SET_THEME, payload: theme });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				setTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
