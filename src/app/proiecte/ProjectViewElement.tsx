import React from "react";
import {BlogItem, BlogItemTp} from "./data";

function ProjectViewElement({el}: {el: BlogItem}) {
	return (
		<div className="my-5">
			{el.tp == BlogItemTp.heading && (
				<>
					<h2 className="font-bold text-xl">{el.content}</h2>
				</>
			)}

			{el.tp == BlogItemTp.smallHeading && (
				<>
					<h2 className="font-bold text-lg">{el.content}</h2>
				</>
			)}

			{el.tp == BlogItemTp.text && (
				<>
					{
                        el.content?.split("\n").map((textLn) => <p className="font-sans" key={textLn}>{textLn}</p>)
                    }
				</>
			)}

			{el.tp == BlogItemTp.image && (
				<>
					{
                        <img src={el.content} alt="Pic" className="w-full"/>
                    }
				</>
			)}

            
		</div>
	);
}

export default ProjectViewElement;
