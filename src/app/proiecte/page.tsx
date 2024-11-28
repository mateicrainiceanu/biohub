import React from "react";
import {proiecte} from "./data";
import Proiect from "./Proiect";

function Proiecte() {
	return (
		<div className="max-w-5xl mx-auto">
			<h1 className="text-center font-bold text-2xl my-5">Proiecte</h1>
			<hr className="border-black my-10" />
			{proiecte.map((proiect, i) => (
				<Proiect project={proiect} key={i} />
			))}
		</div>
	);
}

export default Proiecte;
