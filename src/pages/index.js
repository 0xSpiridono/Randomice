import Header from "../containers/Header";
import Hero from "../containers/Hero";
import Gallery from "../containers/Gallery";
import FAQ from "../containers/FAQ";

export default function Index() {
	return (

		<div className="items-center min-h-screen bg-primary">
			<Header />
			<Hero />
			<Gallery />
			<FAQ />
		</div>
		

	);
}
