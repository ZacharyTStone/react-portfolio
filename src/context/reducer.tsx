import { SET_AUDIO_PREFERENCE, SET_ACCEPT_APP, SET_SHOW_APP } from "./actions";

const reducer = (
	state: any,
	action: {
		type: string;
		payload: any;
	}
) => {
	if (action.type === SET_AUDIO_PREFERENCE) {
		return { ...state, useAudio: action.payload };
	}

	if (action.type === SET_ACCEPT_APP) {
		// only update state
		return { ...state, acceptApp: action.payload };
	}

	if (action.type === SET_SHOW_APP) {
		return { ...state, showApp: action.payload };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
