import React, {ReactNode} from "react";
import {FaGraduationCap, FaAtom, FaHandshakeSimple, FaPeopleGroup, FaChartLine} from "react-icons/fa6";
import {FaHeartbeat} from "react-icons/fa";
import {SectionHead} from "../_componets/Texts";

function Mission() {
	const items = [
		{txt: "Educație", icon: <FaGraduationCap />},
		{txt: "Știință", icon: <FaAtom />},
		{txt: "Respect", icon: <FaHandshakeSimple />},
		{txt: "Sănătate", icon: <FaHeartbeat />},
		{txt: "Prietenie", icon: <FaPeopleGroup />},
		{txt: "Inovație", icon: <FaChartLine />},
	];

	return (
		<div className="w-full my-20">
			<SectionHead>Misiune și valori</SectionHead>
			<div className="flex flex-row flex-wrap">
				{items.map(({txt, icon}, i) => (
					<MissionItem key={i} txt={txt} icon={icon} />
				))}
			</div>
		</div>
	);
}

function MissionItem({txt, icon}: {txt: string; icon: ReactNode}) {
	return (
		<div className="w-full md:w-1/3 px-auto py-10 text-center">
			<div className="flex flex-col gap-2">
				<div className="text-5xl mx-auto">{icon}</div>
				<span className="text-lg ">{txt}</span>
			</div>
		</div>
	);
}

export default Mission;
