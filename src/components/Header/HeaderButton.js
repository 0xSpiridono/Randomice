import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "../../utils/interact";
import { useStatus } from "../../context/statusContext";

export default function HeaderButton() {
	const { setStatus } = useStatus();
	const [walletAddress, setWalletAddress] = useState("");

	const connectWalletaldriched = async () => {
		const walletResponse = await connectWallet();
		setWalletAddress(walletResponse.address);
		setStatus(walletResponse.status);
	};

	useEffect(() => {
		const fetchData = async () => {
			const walletResponse = await getCurrentWalletConnected();
			setWalletAddress(walletResponse.address);
			setStatus(walletResponse.status);

			if (window.ethereum) {
				window.ethereum.on("accountsChanged", async (accounts) => {
					if (accounts.length > 0) {
						setWalletAddress(accounts[0]);
						setStatus("");
					} else {
						setWalletAddress("");
						setStatus("Connect to Metamask using Connect Wallet button.");
					}
				});
			}
		};
		fetchData();
	});

	return (
		<nav aria-label="Connect Button">
			<ul className="flex items-center px-4 py-1 space-x-4 text-center max-w-min">
				<li className="lg:text-xl text-lg px-2 text-purple-300 border border-purple-300 rounded-md cursor-pointer font-flower hover:text-purple-500 hover:border-purple-500">
					<a className="" id="walletButton" onClick={connectWalletaldriched}>
						{walletAddress.length > 0 ? (
							"Connected: " +
							String(walletAddress).substring(0, 6) +
							"..." +
							String(walletAddress).substring(38)
						) : (
							<span>Connect wallet</span>
						)}
					</a>
				</li>
			</ul>
		</nav>
	);
}
