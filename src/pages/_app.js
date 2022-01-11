import Head from "next/head";

import { StatusProvider } from "../context/statusContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<StatusProvider>
			<Head>
				<title>Randomice</title>

				<meta name="title" content="Randomice NFT"/>
				<meta name="description" content="Randomice, built by mice, for mice"/>

				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://randomice.io"/>
				<meta property="og:title" content="Randomice NFT"/>
				<meta property="og:description" content="Randomice, built by mice, for mice"/>
				<meta property="og:image" content="/Banner16x9.png"/>

				<meta property="twitter:card" content="summary_large_image"/>
				<meta property="twitter:url" content="https://randomice.io/"/>
				<meta property="twitter:title" content="Randomice NFT"/>
				<meta property="twitter:description" content="Randomice, built by mice, for mice"/>
				<meta property="twitter:image" content="/Banner16x9.png"/>
			
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<Component {...pageProps} />
		</StatusProvider>
	);
}

export default MyApp;
