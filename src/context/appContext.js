import React, { useReducer, useContext, useRef } from "react";
import reducer from "./reducer";
import { SET_AUDIO_PREFERENCE, SET_THEME, SET_ACCEPT_APP } from "./actions";

const initialState = {
	theme:
		// look at local storage for theme
		// localStorage.getItem("theme") || "dark",
		"dark",
	useAudio: true,
	acceptApp: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setTheme = (theme) => {
		dispatch({ type: SET_THEME, payload: theme });
	};

	const setAudioPreference = (useAudio) => {
		dispatch({ type: SET_AUDIO_PREFERENCE, payload: useAudio });
	};

	const setAcceptApp = (acceptApp) => {
		dispatch({ type: SET_ACCEPT_APP, payload: acceptApp });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				setTheme,
				setAudioPreference,
				setAcceptApp,
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
