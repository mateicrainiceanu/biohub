"use client";
import {useParams} from "next/navigation";
import React from "react";
import {proiecte} from "../data";
import ProjectViewElement from "../ProjectViewElement";

function ProjectView() {
	const title = useParams().title || "";
	const project = proiecte.find((proiect) => proiect.short === title);
	return <div className="px-2 max-w-3xl mx-auto">
        <h1 className="text-center font-bold text-2xl">{project?.title}</h1>
        <hr className="my-5 border-black"/>
        {project?.content?.map((el, i) => <ProjectViewElement key={i} el={el}/>)}
        </div>;
}

export default ProjectView;
