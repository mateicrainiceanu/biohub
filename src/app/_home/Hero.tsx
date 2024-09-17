import React from "react";
import AppBtn from "../_componets/AppBtn";
import {BigTitle} from "../_componets/Texts";

function Hero() {
	return (
		<div className="p-12">
			<div className="flex w-full">
				<div className="w-1/2 py-32 h-full">
					<BigTitle>Welcome to BioHub!</BigTitle>
					<p className="my-5">Locul în care edudcația întălnește creativitatea și distracția.</p>
					<AppBtn txt="Vezi proiectele noastre" link="/proiecte" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
