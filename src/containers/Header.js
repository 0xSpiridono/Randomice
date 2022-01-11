import HeaderLogo from "../components/Header/HeaderLogo";
import HeaderNavigation from "../components/Header/HeaderNavigation";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderSocial from "../components/Header/HeaderSocial";

export default function Header() {
	return (
		<header className="inset-x-0 top-0 z-10 flex flex-wrap min-w-full text-white bg-indigo-800 backdrop-filter">
			<div className="container flex flex-wrap items-center justify-between h-full py-1 mx-auto xl:flex-nowrap max-w-7xl ">
				<HeaderLogo />
				<HeaderNavigation />
				<HeaderButton />
				<HeaderSocial />
			</div>
		</header>
	);
}
