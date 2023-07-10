

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



export const getRandomColor = (baseColor: string): string => {
	// Generate random variations for brightness and saturation
	const brightnessVariation = Math.random() * 0.4 - 0.2;
	const saturationVariation = Math.random() * 0.4 - 0.2;

	// Adjust brightness and saturation of the base color
	const adjustedColor = adjustColor(
		baseColor,
		brightnessVariation,
		saturationVariation
	);

	return adjustedColor;
};

export const adjustColor = (
	color: string,
	brightness: number,
	saturation: number
): string => {
	const hex = color.slice(1); // Remove the "#" from the color string
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	const hsl = rgbToHsl(r, g, b);

	const adjustedHsl = [
		hsl[0], // Hue remains unchanged
		clamp(hsl[1] + saturation), // Adjust saturation within [0, 1]
		clamp(hsl[2] + brightness), // Adjust brightness within [0, 1]
	];

	const adjustedRgb = hslToRgb(
		adjustedHsl[0],
		adjustedHsl[1],
		adjustedHsl[2]
	);

	return `rgb(${adjustedRgb[0]}, ${adjustedRgb[1]}, ${adjustedRgb[2]})`;
};
export const hslToRgb = (h: number, s: number, l: number): number[] => {
	let r = 0,
		g = 0,
		b = 0;

	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		const hue2rgb = (p: number, q: number, t: number): number => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

export const rgbToHsl = (r: number, g: number, b: number): number[] => {
	r /= 255;
	g /= 255;
	b /= 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	let h = 0,
		s = 0,
		l = 0;

	l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			default:
				break;
		}

		h /= 6;
	}

	return [h, s, l];
};
export const clamp = (value: number): number => {
	return Math.max(0, Math.min(1, value));
};