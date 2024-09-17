import React from "react";
import {SectionHead} from "../_componets/Texts";
import Image from "next/image";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";
import Link from "next/link";

function Mentori() {
	return (
		<div className="my-36 p-5">
			<SectionHead>Mentori</SectionHead>
			<div className="flex my-10 flex-wrap">
				<div className="w-full md:w-1/3">
					<Image src="/adrian.png" alt="head mentor" height={300} width={300} className="mx-auto rounded-full"></Image>
					<h3 className="text-center my-5 font-bold"> prof. Adrian Balog</h3>
				</div>
				<div className="w-full md:w-2/3 h-full">
					<div className="flex h-full min-h-72">
						<FaQuoteRight size={25} className="mt-auto min-w-10" />
						<div className="flex flex-col gap-3 h-full md:my-auto mx-3 my-10">
							<p>
								Mă numesc Adrian Balog și sunt pasionat de Biologie de prin clasa a V a. Sunt printre primii absolvenți
								de Master Didactic în Biologie la Facultatea de Chimie, Biologie, Geografie din Timisoara din România.{" "}
							</p>{" "}
							<p>
								Pasiunea mea pentru stiință și educație a dus la crearea acestui portal menit să vină în sprijinul
								tuturor celor pasionati de știință si educație.{" "}
							</p>{" "}
							<p>
								{" "}
								În timpul liber ma delectez cu muzică, cărti, dar și cele mai frumoase peisaje montane ale României.
							</p>
						</div>
						<FaQuoteLeft size={25} className="ms-auto min-w-10" />
					</div>
				</div>
				<div className="ms-auto">
					<Link
						href="/mentori/adrian-balog"
						className="p-3 underline hover:bg-gray-600 hover:text-gray-200 duration-200 ">
						Citește mai multe despre mine
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Mentori;
