import React from "react";
import {SmallHead} from "./Texts";
import Link from "next/link";
import {FaInstagram, FaFacebook} from "react-icons/fa6";

function Footer() {
	return (
		<div className="w-full min-h-10 bg-green-300 pt-2">
			<div className="md:flex m-12">
				<div className="flex flex-col gap-2">
					<SmallHead>Legal</SmallHead>
					<Link className="text-sm underline" href="/l/tnc">
						Termeni și condiții
					</Link>
					<Link className="text-sm underline" href="/l/confidentialitate">
						Politica de confidențialitate
					</Link>
					<Link className="text-sm underline" href="/l/gdpr">
						Legislație GDPR
					</Link>
				</div>
				<div className="ms-auto min-w-52 flex flex-col gap-2">
					<SmallHead>Social</SmallHead>
					<div className="flex gap-3">
						<Link href="/">
							<FaInstagram size={25}/>
						</Link>
						<Link href="/">
							<FaFacebook size={25}/>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center py-5">{new Date(Date.now()).getFullYear()} © MateiCrainiceanu</div>
		</div>
	);
}

export default Footer;
