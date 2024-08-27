"use client"

import React from "react";

type AppBtnProps = {
	txt: string;
	link?: string;
	action?: () => void;
};

function AppBtn({txt, link, action}: AppBtnProps) {
	function handleClick() {
		if (action) {
			action();
		} else if (link) {
			window.location.href = link;
		}
	}

	return (
		<button className="bg-green-800 text-white py-2 px-3 rounded-sm hover:bg-green-200  hover:text-black transtion-transform duration-300" onClick={handleClick}>
			{txt}
		</button>
	);
}

export default AppBtn;
