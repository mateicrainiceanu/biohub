import Link from 'next/link';
import React from 'react'

function Page() {
  return (
		<div className="legal">
			<h1>Ce este GDPR?</h1>
			<p>
				<strong>General Data Protection Regulation (GDPR) (EU) 2016/679</strong> prevede, printre altele, că prelucrarea
				datelor personale trebuie adusă la cunoștința persoanelor vizate, iar acestea ar trebui să știe și cine este
				responsabilul cu protecția datelor, care este temeiul prelucrării, dacă se recurge la profilare, cât timp sunt
				ținute datele și o serie de alte elemente pentru care fiecare utilizator ar trebui să-și dea acordul în mod
				explicit din 25 mai 2018.
			</p>

			<p>
				Regulamentul (UE) 2016/679 privind protecția persoanelor fizice referitor la prelucrarea datelor cu caracter
				personal și libera circulație a acestor date poate fi găsit accesând următorul link:
			</p>

			<p>
				<Link href="https://eur-lex.europa.eu/legal-content/RO/TXT/PDF/?uri=CELEX:32016R0679&from=EN" target="_blank">
					Regulamentul (UE) 2016/679
				</Link>
			</p>
		</div>
	);
}

export default Page