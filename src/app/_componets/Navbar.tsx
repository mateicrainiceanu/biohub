import Link from "next/link";
import React from "react";

function Navbar() {
	const navs = [
		{
			name: "Acasă",
			link: "/",
		},
		{
			name: "Despre",
			link: "/despre",
		},
		{
			name: "Proiecte",
			link: "/proiecte",
		},
	];

	return (
		<div className="w-full p-5 sticky top-0">
			<div className="flex">
				<span className="text-3xl font-bold">BioHub</span>

				<div id="nav-menu" className="ms-auto flex gap-8">
                    {navs.map((nav, i) => <NavItem key={i} name={nav.name} link={nav.link}/>)}
                </div>
			</div>
		</div>
	);
}

function NavItem({name, link}: {name: string; link: string}) {
	return (
		<Link className="text-gray-400 hover:text-gray-500 hover:font-bold duration-300" href={link}>
			{name}
		</Link>
	);
}

export {NavItem};
export default Navbar;
