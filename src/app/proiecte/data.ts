export enum BlogItemTp {heading, smallHeading, text, image}

export interface BlogItem {
    tp: BlogItemTp,
    content?: string,
    noNewLine?: boolean,
}

export interface Project {
    title: string,
    short: string,
    date: Date,
    description: string,
    imgsrc: string,
    content?: BlogItem[] 
}

export const proiecte: Project[] = [
    {
        title: "Noaptea cercetatorilor",
        short: "noaptea-cercetatorilor-2023",
        date: new Date("29-09-2023"),
        description: `🧪🔬 Astăzi, 29 septembrie 2023, BIOCercul Liceului Teoretic "Nikolaus Lenau", format din mulți elevi entuziaști din clasele a V-a (D, E), a VI-a (A, B, D, E), a VIII-a (C) și a IX-a (STS), coordonat de profesorul de biologie Adrian Balog au fost parte din ediția a IX a evenimentului mondial "Noaptea Cercetătorilor".\n A fost o ocazie foarte bună pentru elevi de a se reconecta între ei, de a închega și mai bine relații, dar și a se conecta cu alți cercetători! 🔬🧪🧫`,
        imgsrc: "https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: [
            {
                tp: BlogItemTp.heading,
                content: "Participarea la Nokia Noaptea Cercetatorilor"
            },
            {
                tp: BlogItemTp.smallHeading,
                content: "Biohub a participat la Noaptea Cercetatorilor"
            },
            {
                tp: BlogItemTp.text,
                content: "Acest text poate sa difere de cel din descriere. 🧪🔬 Astăzi, 29 septembrie 2023, BIOCercul Liceului Teoretic 'Nikolaus Lenau', format din mulți elevi entuziaști din clasele a V-a (D, E), a VI-a (A, B, D, E), a VIII-a (C) și a IX-a (STS), coordonat de profesorul de biologie Adrian Balog au fost parte din ediția a IX a evenimentului mondial 'Noaptea Cercetătorilor'.\n A fost o ocazie foarte bună pentru elevi de a se reconecta între ei, de a închega și mai bine relații, dar și a se conecta cu alți cercetători! 🔬🧪🧫"
            },
            {
                tp: BlogItemTp.image,
                content: "https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
    },
    {
        title: "Bio Cerc Lenau pentu a doua oară la Romanian Science Festival",
        short: "romanian-science-festival-2023",
        date: new Date("25-05-2023"),
        description: `🧪🔬 Astăzi, 25 mai 2023, BIOCercul Liceului Teoretic "Nikolaus Lenau", format din mulți elevi entuziaști din clasele a V-a (A,B, D, E), a VII-a (B, C), a VIII-a (E) și a IX-a (STS, F) și elevi din grupul de robotică al liceului coordonați de profesorul de biologie Adrian Balog au fost parte din ediția a V a a celui mai mare festival de științe din România, care are loc anual în Parc Iulius din Timișoara.\n A fost o ocazie foarte bună pentru elevi de a se reconecta între ei, de a închega și mai bine relații, dar și a se conecta cu alți cercetători! 🔬🧪🧫`,
        imgsrc: "https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]