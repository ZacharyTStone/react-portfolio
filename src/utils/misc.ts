export const createGreeting = (): string => {
	const time = new Date().getHours();
	let currGreeting = "";
	if (time < 12) {
		currGreeting = "landing.morning";
	} else if (time >= 12 && time <= 18) {
		currGreeting = "landing.afternoon";
	} else {
		currGreeting = "landing.evening";
	}

	return currGreeting;
};
