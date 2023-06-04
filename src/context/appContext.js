import React, { useReducer, useContext, useRef } from "react";
import reducer from "./reducer";
import { SET_AUDIO_PREFERENCE, SET_THEME } from "./actions";

const initialState = {
	theme:
		// look at local storage for theme
		localStorage.getItem("theme") || "dark",
	useAudio: false,
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

	return (
		<AppContext.Provider
			value={{
				...state,
				setTheme,
				setAudioPreference,
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
