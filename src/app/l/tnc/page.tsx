"use client";
import React, {useEffect, useState} from "react";
import "./../legal.css";
import Link from "next/link";

function Page() {
	const [win, setWind] = useState({origin: "", host: ""});

	//todo - add spinner

	useEffect(() => {
		setWind({origin: window.location.origin, host: window.location.host});
	}, []);

	return (
		<div className="legal">
            <h1>Termeni și condiții</h1>
			<p>
				<strong>Bioscience Hub România</strong> este o marcă înregistrată de către Balog Adrian Nevzat, operator de date
				cu numărul 4322917.
			</p>
			<p>
				Bioscience Hub România va lua toate măsurile tehnice adecvate pentru protejarea datelor dumneavoastră cu
				caracter personal, împotriva distrugerii accidentale sau ilegale, pierderii, modificării, dezvăluirii sau
				accesului neautorizat. Aveți dreptul de a solicita oricând ștergerea contului și a tuturor datelor personale
				prin e-mail la adresa{" "}
				<Link className="underline" href="mailto:biotim95@gmail.com">
					biotim95@gmail.com
				</Link>
				.
			</p>
			<p>
				Datele oferite prin înregistrarea pe acest site sunt folosite strict pentru autentificarea pe el, participarea
				la cursuri, pentru participarea la diferite campanii, concursuri și validarea câștigurilor, în conformitate cu
				Termenii și Condițiile Bioscience Hub România de mai jos.
			</p>

			<h2>Definiții și Condiții generale</h2>
			<ul>
				<li>
					BIO cu Herr Adrian își rezervă dreptul de a modifica acest document în orice moment și în orice fel.
					Modificările vor intra în vigoare din momentul în care vor fi introduse în prezentul document. De aceea, vă
					invităm să-l recitiți periodic. Dacă, în orice moment, nu mai acceptați în întregime termenii și condițiile,
					aveți posibilitatea de a nu mai utiliza{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					Orice utilizare a acestui website sau a serviciilor sale va fi considerată un accept al termenilor și
					condițiilor conținute în prezentul document.
				</li>
				<li>
					Acest website este disponibil public la adresa{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					“Utilizator” este numită orice persoană care accesează{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					și folosește serviciile puse la dispoziție prin acest site.
				</li>
				<li>
					“Editor” este numită persoana care se ocupă de postarea, mentenanța și reactualizarea informațiilor de pe{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					“Moderator” este orice persoană desemnată de Bioscience Hub România să se ocupe de monitorizarea, întreținerea
					și medierea discuțiilor de pe{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					Toate drepturile de copiere, reproducere și distribuție sub orice formă sunt rezervate și aparțin BIOSCIENCE
					HUB ROMÂNIA, în conformitate cu legislația în vigoare. Utilizând acest site, acceptați să nu reproduceți,
					duplicați, copiați, vindeți, revindeți sau să exploatați nici o parte a serviciilor, folosirea serviciilor sau
					accesul la serviciile puse la dispoziție de BIOSCIENCE HUB ROMÂNIA prin intermediul{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					Firma BIOSCIENCE HUB ROMÂNIA nu poate fi făcută răspunzătoare pentru nici un fel de daune sau neajunsuri
					rezultate în urma unor disfuncționalități ale site-ului, suspendarea unor servicii, erorile apărute în
					materiale. Sunteți de acord că BIOSCIENCE HUB ROMÂNIA nu este răspunzătoare față de dumneavoastră sau orice
					terță persoană sau instituție pentru orice modificare, suspendare sau întrerupere a serviciilor disponibile
					prin intermediul{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					.
				</li>
				<li>
					Conținutul{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					poate fi vizualizat numai pentru folosința personală a utilizatorului website-ului, lipsită de intenție
					comercială.
				</li>
			</ul>

			<h2>Descrierea serviciilor</h2>
			<ul>
				<li>
					Scopul{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					este de a oferi utilizatorilor acces la informații din domeniul științei, cursuri cu privire la dezvoltare
					personală și educațională, știri din lumea științifică, meditații și servicii de educație.
				</li>
				<li>
					BIOSCIENCE HUB ROMÂNIA administrează acest site, care asigură utilizatorilor acces la o serie de resurse,
					informații, portaluri și platforme. Noi servicii vor fi implementate în timp, fără a încălca Politica de
					Confidențialitate sau scopul declarat. Totuși, fiind un site Internet, trebuie să obțineți acces la World Wide
					Web, direct sau cu ajutorul altor dispozitive prin care se pot accesa servicii Internet, plătind orice taxă
					asociată cu acest acces. În plus, trebuie să aveți la dispoziție tot echipamentul necesar pentru a realiza
					această conexiune la World Wide Web, inclusiv un computer și un modem sau alt echipament de acces.
				</li>
			</ul>

			<h2>Obligațiile utilizatorilor la înregistrare</h2>
			<ul>
				<li>
					Pentru a folosi serviciile oferite de{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					, vă obligați să:
					<ul>
						<li>
							Furnizați date adevărate, exacte și complete despre dumneavoastră așa cum este cerut de formularul
							(formularele) de înregistrare.
						</li>
						<li>
							Mentineți și înnoiți, atunci când situația o cere, datele de înregistrare pentru a fi adevărate, exacte și
							complete. Dacă veți furniza informații care nu sunt conforme cu realitatea, inexacte sau incomplete,
							BIOSCIENCE HUB ROMÂNIA are dreptul să suspende accesul dumneavoastră și să refuze toate încercările
							curente sau viitoare de folosire a portalului.
						</li>
						<li>
							Dacă utilizați alt nume sau o adresă de e-mail care nu vă aparține, înregistrarea va fi ștearsă, accesul
							blocat și în cazul unor daune provocate BIOSCIENCE HUB ROMÂNIA sau site-ului, datele vor fi oferite
							Poliției și organelor de anchetă.
						</li>
					</ul>
				</li>
			</ul>

			<h2>Răspundere juridică. Despăgubiri</h2>
			<ul>
				<li>
					Editorii și Utilizatorii{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					sunt singurii responsabili de informațiile postate pe site.
				</li>
				<li>
					Fiecare utilizator al{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					este de acord ca, la cererea BIOSCIENCE HUB ROMÂNIA, să exonereze de răspundere{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					și BIOSCIENCE HUB ROMÂNIA pentru orice acțiuni judiciare sau extrajudiciare și să acopere cheltuielile de
					judecată și orice alte cheltuieli care ar putea să apară ca urmare a încălcării de către utilizatorul
					respectiv a clauzelor prezentului document.
				</li>
				<li>
					Sunteți de acord să despăgubiți și să protejați BIOSCIENCE HUB ROMÂNIA, partenerii și angajații de orice
					pretenții sau cereri, inclusiv cheltuieli de judecată sau onorarii pentru avocați, făcute de o terță persoană
					sau organizație datorită sau reieșind din conținutul mesajelor postate sau datorită folosirii serviciilor
					site-ului, conexiunii la site, violării acestor reguli sau violării oricăror drepturi ale acelui terț.
				</li>
			</ul>

			<h2>Drepturi de autor. Preluarea informațiilor</h2>
			<ul>
				<li>
					Este interzisă copierea, reproducerea, recompilarea, decompilarea, distribuirea, publicarea, afișarea,
					modificarea, crearea de componente sau produse sau servicii complete derivate, precum și orice modalitate de
					exploatare a{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>
					, cu excepția afișării pe ecranul unui computer personal și imprimarea sau descărcarea, în scop personal și
					necomercial, a anumitor documente sau informații explicit desemnate în acest scop, cu condiția păstrării
					nemodificate a tuturor elementelor care fac referire la drepturile de proprietate intelectuală, alte drepturi
					de proprietate și condițiile de utilizare ale documentelor sau informațiilor respective.
				</li>
				<li>
					Utilizatorii sunt liberi să vină cu sugestii pentru îmbunătățirea site-ului, să-l susțină cu materiale,
					informații și sub orice altă formă. Pentru orice comunicare oficială și semnalarea unor abuzuri, utilizatorii{" "}
					<Link className="underline" href={win.origin}>
						{win.host}
					</Link>{" "}
					au la dispoziție următoarele căi de contact:
					<ul>
						<li>
							Adresa: Piața Victoriei, nr. 4, ap. 13, Timișoara, județul Timiș, cu mențiunea pentru{" "}
							<Link className="underline" href={win.origin}>
								{win.host}
							</Link>
						</li>
						<li>
							Adresa de email:{" "}
							<Link className="underline" href="mailto:biotim95@gmail.com">
								biotim95@gmail.com
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Page;
