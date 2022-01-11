import Link from "next/link";

export default function HeaderNavigation() {
	return (
		<nav aria-label="Main Menu">
			<ul className="container flex flex-wrap items-center space-x-8 xl:flex-nowrap px-4 ">
				<li className="text-gray-200 text-semibold lg:text-4xl text-2xl font-flower">
					<Link href="#about">
						<a>About</a>
					</Link>
				</li>

				<li className="text-gray-200 text-semibold lg:text-4xl text-2xl font-flower">
					<Link href="#gallery">
						<a>Gallery</a>
					</Link>
				</li>

				<li className="text-gray-200 text-semibold lg:text-4xl text-2xl font-flower">
					<Link href="#faq">
						<a>FAQ</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
