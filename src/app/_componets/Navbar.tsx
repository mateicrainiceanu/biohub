"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import {TiThMenuOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [extended, setExtended] = useState(false);

	// Scroll effect to change navbar style on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navs = [
		{name: "Acasă", link: "/"},
		// {name: "Despre", link: "/despre"},
		{name: "Proiecte", link: "/proiecte"},
		{name: "Materie", link: "/materie"},
	];

	return (
		<div
			className={`w-full sticky top-0 z-50 transition-all duration-500 ${
				scrolled ? "bg-green-200 py-4 bg-opacity-90 " : "bg-transparent py-6"
			}`}>
			<div className="flex justify-between items-center max-w-6xl mx-auto px-6">
				{/* Brand/Logo */}
				<span className="text-3xl font-bold">BioHub</span>

				{/* Mobile menu icon */}
				<button className="md:hidden cursor-pointer" onClick={() => setExtended(!extended)}>
					{!extended ? <TiThMenuOutline size={30} /> : <IoClose size={30} />}
				</button>

				{/* Nav links */}
				<div
					className={`absolute top-20 right-10 text-center p-8 rounded-lg bg-green-700 md:bg-transparent md:static flex-col md:flex-row md:flex gap-8 ${
						extended ? "flex" : "hidden"
					} md:items-center`}>
					{navs.map((nav, i) => (
						<NavItem key={i} name={nav.name} link={nav.link} />
					))}
				</div>
			</div>
		</div>
	);
}

function NavItem({name, link}: {name: string; link: string}) {
	return (
		<Link className="text-white md:text-gray-400 md:hover:text-gray-500 hover:font-bold duration-300" href={link}>
			{name}
		</Link>
	);
}

export {NavItem};
export default Navbar;
