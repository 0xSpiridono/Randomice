export default function HeroInfo({ nftPrice, maxMintAmount }) {
	return (
		<div className="mx-auto lg:w-3/4">
			<div>
				<h1 className="text-6xl font-bold text-center text-purple-800 font-flower">
					RANDO				<span className="text-pink-400 ">
					MICE
				</span>
				</h1>
				<h1 className="text-2xl font-bold text-center text-purple-500 font-flower">
					built by mice, for everyone
				</h1>
			</div>
			<div>
				<h1 className="py-8 space-y-4 text-2xl leading-6 text-gray-700 lg:text-4xl lg:leading-7 font-flower">
					Badass RandoMice are here to bring you joy!
				</h1>
			</div>
			<div className="divide-y divide-gray-200">
				<div className="space-y-4 text-2xl text-bold leading-6 text-gray-700 lg:text-4xl lg:leading-7">
					<ul className="list-disc">
						<li className="flex items-start">
							<span className="flex items-center h-6 sm:h-7">🐭</span>
							<p className="ml-2 font-flower">
								Free to claim by owners of {" "}
								<a className="font-semibold text-purple-600">Anonymice</a> and <a className="font-semibold text-purple-600">Doodles</a> NFT collections (max 1 per wallet){" "}
								<p>&nbsp;</p>
							</p>
						</li>
						<li className="flex items-start">
							<span className="flex items-center h-6 sm:h-7">🐭</span>
							<p className="ml-2 font-flower">
								<a className="font-semibold text-purple-600">{nftPrice} ETH</a>{" "}
								per RandoMouse for the rest, max {maxMintAmount} per transaction
								<p>&nbsp;</p>
							</p>
						</li>
						<li className="flex items-start">
							<span className="flex items-center h-6 sm:h-7">🐭</span>
							<p className="ml-2 font-flower">
								Each RandoMouse is randomly generated from{" "}
								<a className="font-semibold text-purple-600">
								165 badass traits
								</a>{" "}
								  of different rarities and permanently stored on decentralised web (IPFS).
								<p>&nbsp;</p>
							</p>
						</li>
						<li className="flex items-start">
							<span className="flex items-center h-6 sm:h-7">🐭</span>
							<p className="ml-2 font-flower">
								Completely free from empty promises and utility fads, RandoMice are here to provide
								nothing more than <a className="font-semibold text-purple-600">fun and vibe</a>!{" "}
								<p>&nbsp;</p>
							</p>
						</li>

					</ul>
				</div>
			</div>
		</div>
	);
}
