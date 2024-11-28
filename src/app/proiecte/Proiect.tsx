"use client";
import React from "react";
import {Project} from "./data";

function Proiect({project}: {project: Project}) {
	return (
		<div
			className="p-5 hover:p-1 duration-200 select-none"
			onClick={() => {
				window.location.href = "/proiecte/" + project.short;
			}}>
			<div className="max-w-5xl mx-auto flex flex-wrap">
				<div className="w-full md:w-2/3">
					<h3 className="font-bold my-3">{project.title}</h3>
					{project.description.split("\n").map((text, i) => (
						<p className="font-sans my-2" key={i}>
							{text}
						</p>
					))}
				</div>
				<div className="w-full md:w-1/3 p-2">
					<img src={project.imgsrc} alt="din activitate" className="w-full" />
				</div>
			</div>

			<hr className="border-black my-10" />
		</div>
	);
}

export default Proiect;
