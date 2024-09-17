"use client";
import React, {useState} from "react";
import {Autocomplete, TextField} from "@mui/material";

import {data, GradeInformation} from "./data";
import Link from "next/link";

function Page() {
	const [information, setInformation] = useState<null | GradeInformation>(null);

	return (
		<div className="m-10">
			<h1 className="text-2xl text-center font-bold">Biologie</h1>
			<div className="max-w-lg mx-auto my-5">
				<Autocomplete
					options={data}
					getOptionLabel={(item) => "clasa a " + item.grade + "-a"}
					onChange={(_, val) => {
						setInformation(val);
					}}
					renderInput={(params) => <TextField {...params} label="Clasa" color={"success"} />}
				/>
				{information != null && (
					<div className="my-5">
						<h3 className="my-2 text-center font-bold text-xl">Clasa a {information.grade}-a</h3>
						<h4 className="underline font-bold">Resurse</h4>
						<ul>
							{information.files.length == 0 ? (
								<li>Nimic disponibil</li>
							) : (
								information.files.map((file, i) => (
									<li key={i}>
										{file.src ? (
											<Link className="text-green-900 hover:underline duration-200 ms-3 hover:ms-4" href={file.src}>
												{file.name}
											</Link>
										) : (
											<span className="text-gray-500 ms-3">{file.name} (indisponibil)</span>
										)}
									</li>
								))
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Page;
