import { useEffect } from "react";

export const UseLockScroll = () => {
	useEffect(() => {
		// Lock scroll when the component is mounted
		document.body.style.overflow = "hidden";

		// Unlock scroll when the component is unmounted
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);
}