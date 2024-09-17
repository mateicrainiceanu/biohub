import Link from "next/link";
import React from "react";
import "./../legal.css";

function Conf() {
	return (
		<div className="legal">
			<h1>Politica de Confidențialitate</h1>
			<p>
				<strong>BIOSCIENCE HUB ROMÂNIA</strong>, este o marcă înregistrată a persoană juridică română, cu sediul în
				TIMIȘOARA, Piața Victoriei, nr. 4, apartament 13, înregistrată la Registrul Comerțului cu nr.
				J35/2699/05.07.2021, cod fiscal RO 44540312, înțelege să își actualizeze politica de prelucrare a datelor cu
				caracter personal în vederea respectarii noilor reguli introduse prin Regulamentul nr 679/2016.
			</p>
			<h2>1. Ce reprezintă această Politică?</h2>
			<p>Prin această Politică îți aducem la cunoștință:</p>
			<ul>
				<li>Anumite concepte importante referitoare la datele cu caracter personal;</li>
				<li>Ce date personale prelucrăm;</li>
				<li>Cum folosim aceste date;</li>
				<li>Cui putem transmite datele;</li>
				<li>Ce drepturi aveți în ceea ce privește datele.</li>
			</ul>
			<h3>Ce sunt datele cu caracter personal?</h3>
			<p>
				“Date cu caracter personal” înseamnă orice informație sau informații care vă identifică sau vă pot identifica
				direct sau indirect. Aceasta include informații precum: nume, prenume, adresa de e-mail, domiciliul, număr de
				telefon, numele de utilizator, fotografiile de profil, date de localizare, etc. Acestea ar putea include și
				identificatori numerici unici, cum ar fi adresa IP a computerului dumneavoastră sau adresa MAC a dispozitivului
				dumneavoastră mobil, precum și modulele cookies.
			</p>
			<h3>Ce înseamnă prelucrarea datelor cu caracter personal?</h3>
			<p>
				“Prelucrare” înseamnă orice operațiune sau set de operațiuni efectuate asupra datelor cu caracter personal sau
				asupra seturilor de date cu caracter personal, cu sau fără utilizarea de mijloace automatizate, cum ar fi
				colectarea, înregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea,
				consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispoziție în orice alt mod,
				alinierea sau combinarea, restricționarea, ștergerea sau distrugerea.
			</p>
			<h3>Cum trebuie prelucrate datele?</h3>
			<ul>
				<li>în mod echitabil, legal și transparent;</li>
				<li>colectate în scopuri specificate, explicite și legitime;</li>
				<li>
					adecvate, relevante și limitate în raport cu scopurile pentru care sunt prelucrate (“reducerea la minimum a
					datelor”);
				</li>
				<li>corecte și actualizate;</li>
				<li>
					păstrate într-o formă care nu permite identificarea persoanelor vizate mai mult timp decât este necesar;
				</li>
				<li>
					procesate în conformitate cu drepturile persoanei vizate și într-un mod care asigură securitate adecvată și
					protecție împotriva prelucrării neautorizate sau ilegale și împotriva pierderii.
				</li>
			</ul>
			<h2>Ce acoperă această Politică?</h2>
			<p>
				Politica pe care o implementăm acoperă toate serviciile Bioscience Hub România (știri din domeniul științei,
				concursuri, evenimente, meditații, servicii de educație, etc) indiferent de modalitatea în care sunt oferite
				(fizic, website, aplicații, telefon, etc).
			</p>
			<h3>Politica se aplică prelucrării datelor cu caracter personal ale:</h3>
			<ul>
				<li>partenerilor noștri contractuali precum furnizori, vânzători, clienți;</li>
				<li>
					vizitatorilor și utilizatorilor site-ului nostru care poate fi accesat la adresele biosciencehub.ro
					(“Utilizatori”);
				</li>
				<li>persoanelor interesate să participe în cadrul programelor educaționale (“Candidați”);</li>
				<li>participanților la evenimentele organizate de Bioscience Hub România (“Participanți”).</li>
			</ul>
			<h2>Ce categorii de informații colectăm despre dumneavoastră?</h2>
			<ul>
				<li>
					<strong>Informații pe care ni le furnizați:</strong> De fiecare dată când interacționați cu noi, putem colecta
					date de identificare și de contact (nume, prenume, adresă, email etc.).
				</li>
				<li>
					<strong>Informații furnizate de tehnologia pe care o folosiți:</strong> Date precum IP-ul, tipul și versiunea
					de browser, setările de fus orar, extensiile browser-ului și altele.
				</li>
			</ul>
			<h2>Date sensibile</h2>
			<p>
				Nu vom colecta sau prelucra date cu caracter personal sensibile legate de dumneavoastră, precum originea
				rasială, opinii politice sau date despre sănătate.
			</p>
			<h2>Cum și în ce temei folosim datele cu caracter personal?</h2>
			<p>
				Trebuie să avem un temei legal pentru a prelucra datele personale, cum ar fi consimțământul dumneavoastră,
				necesitatea contractuală, obligațiile legale sau interesele legitime.
			</p>
			<h2>Drepturile dumneavoastră</h2>
			<p>
				Aveți dreptul să solicitați accesul, rectificarea, ștergerea sau restricționarea prelucrării datelor
				dumneavoastră personale. Puteți contacta Bioscience Hub România la{" "}
				<Link href="mailto:biotim95@gmail.com">biotim95@gmail.com</Link> pentru a exercita aceste drepturi.
			</p>
			<p>
				<strong>Ultima actualizare:</strong> 03 ianuarie 2024
			</p>
		</div>
	);
}

export default Conf;
