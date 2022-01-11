import Link from "next/link";

export default function HeaderLogo() {
	return (
		<Link href="#">
			<a className="container items-center px-4 w-max text-4xl lg:text-5xl font-flower">
				<span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-green-400 ">
				RANDO</span>
				
				<span className="text-pink-400 ">
					MICE
				</span>
			</a>
		</Link>
	);
}
