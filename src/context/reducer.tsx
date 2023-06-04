import { SET_THEME, SET_AUDIO_PREFERENCE } from "./actions";

import { initialState } from "./appContext";

const reducer = (
	state: any,
	action: {
		type: string;
		payload: any;
	}
) => {
	if (action.type === SET_THEME) {
		// update the theme in local storage
		localStorage.setItem("theme", action.payload);

		// update the theme in the state

		return { ...state, theme: action.payload };
	}

	if (action.type === SET_AUDIO_PREFERENCE) {
		// update the audio preference in local storage
		localStorage.setItem("audioPreference", action.payload);

		// update the audio preference in the state

		return { ...state, useAudio: action.payload };
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
