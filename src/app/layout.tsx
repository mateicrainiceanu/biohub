import type {Metadata} from "next";
import {Roboto_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./_componets/Navbar";
import Footer from "./_componets/Footer";

const roboto = Roboto_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Biohub",
	description: "Locul în care edudcația întălnește creativitatea și distracția.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ro">
			<body className={"overscroll-none " + roboto.className}>
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
