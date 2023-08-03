import React, { useReducer, useContext, useRef } from "react";
import reducer from "./reducer";
import { SET_AUDIO_PREFERENCE, SET_ACCEPT_APP, SET_SHOW_APP } from "./actions";

const initialState = {
	useAudio: false,
	acceptApp: false,
	showApp: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setAudioPreference = (useAudio) => {
		dispatch({ type: SET_AUDIO_PREFERENCE, payload: useAudio });
	};

	const setAcceptApp = (acceptApp) => {
		dispatch({ type: SET_ACCEPT_APP, payload: acceptApp });
	};

	const setShowApp = (showApp) => {
		dispatch({ type: SET_SHOW_APP, payload: showApp });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				setAudioPreference,
				setAcceptApp,
				setShowApp,
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
