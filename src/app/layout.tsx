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
				<div className="m-12">
					<Navbar />
					<main className="p-5 min-h-screen">{children}</main>
				</div>
				<Footer></Footer>
			</body>
		</html>
	);
}
